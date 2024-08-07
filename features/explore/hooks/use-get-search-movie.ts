import { useInfiniteQuery } from "@tanstack/react-query"
import { TResponse } from "types/response"
import { getSearchMovieRequest } from "features/explore/apis"
import { TMovie, TMovieRequest } from "features/home/types"

export const useGetSearchMovie = (request: TMovieRequest) => {
    return useInfiniteQuery<TResponse<TMovie[]>>({
        queryKey: ['search-movie', request],
        queryFn: ({pageParam = 1}) => 
            getSearchMovieRequest({ 
                ...request,
                page: Number(pageParam) 
            }),
        getNextPageParam: (data) => {
            const page = data.page
            const totalPages = data.total_pages

            if(page >= totalPages){
                return undefined
            }
            
            return page + 1
        },
        initialPageParam: 1,
        enabled: request.query !== ""
    })
}

export const useGetSearchMovieFormatted = (request: TMovieRequest) => {
    const {
        data,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
    } = useGetSearchMovie(request)

    const list_data: TMovie[] = []

    data?.pages.map((pageData) => {
        if(pageData.results){
            pageData.results.map((item) => {
                list_data.push({
                    ...item,
                    poster_path: `${process.env.TMDB_IMAGE_URL}${item.poster_path}`
                })
            })
        }
    })

    return {
        data: list_data,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
        fetchNextPage
    };
}
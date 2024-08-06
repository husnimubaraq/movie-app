import { useInfiniteQuery } from "@tanstack/react-query"
import { TResponse } from "types/response"
import { getMoviePopularRequest } from "features/home/apis"
import { TMovie } from "features/home/types"

export const useGetMoviePopular = () => {
    return useInfiniteQuery<TResponse<TMovie[]>>({
        queryKey: ['movie-popular'],
        queryFn: ({pageParam = 1}) => 
            getMoviePopularRequest({ 
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
        initialPageParam: 1
    })
}

export const useGetMoviePopularFormatted = () => {
    const {
        data,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
    } = useGetMoviePopular()

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
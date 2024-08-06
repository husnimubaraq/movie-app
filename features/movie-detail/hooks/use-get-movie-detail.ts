import { useQuery } from "@tanstack/react-query"
import { getMovieDetailRequest } from "features/movie-detail/apis"
import { TMovieDetail } from "features/movie-detail/types"

export const useGetMovieDetail = (id: number) => {
    return useQuery<TMovieDetail>({
        queryKey: ['movie-detail', id],
        queryFn: () => getMovieDetailRequest(id)
    })
}
import { useQuery } from "@tanstack/react-query"
import { TMovie } from "features/home"
import { getMovieRecommendationRequest } from "features/movie-detail/apis"
import { TResponse } from "types"
import { dataFormatter } from "utils/formatter"

export const useGetMovieRecommendation = (id: number) => {
    return useQuery<TResponse<TMovie>>({
        queryKey: ['movie-recommendation', id],
        queryFn: () => getMovieRecommendationRequest(id)
    })
}

export const useGetMovieRecommendationFormatted = (id: number) => {
    const { data } = useGetMovieRecommendation(id)

    let formatted = data?.results as TMovie[] | undefined

    return dataFormatter(formatted ?? [], (item) => ({
        ...item,
        poster_path: `${process.env.TMDB_IMAGE_URL}${item.poster_path}`
    }))
}
import { useQuery } from "@tanstack/react-query"
import { getMovieCastRequest } from "features/movie-detail/apis"
import { TMovieCastResponse } from "features/movie-detail/types"
import { dataFormatter } from "utils/formatter"

export const useGetMovieCast = (id: number) => {
    return useQuery<TMovieCastResponse>({
        queryKey: ['movie-cast', id],
        queryFn: () => getMovieCastRequest(id)
    })
}

export const useGetMovieCastFormatted = (id: number) => {
    const { data } = useGetMovieCast(id)

    let formatted = data?.cast

    let dataFiltterred = formatted?.filter(x => x.known_for_department === "Acting")

    return dataFormatter(dataFiltterred ?? [], (item) => ({
        ...item,
        profile_path: `${process.env.TMDB_IMAGE_URL}${item.profile_path}`
    }))
}
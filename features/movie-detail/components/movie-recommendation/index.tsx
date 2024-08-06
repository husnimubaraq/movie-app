import { RouteProp, useRoute } from "@react-navigation/native"
import { useGetMovieRecommendationFormatted } from "features/movie-detail/hooks"
import { useCallback } from "react"
import { FlatList, ListRenderItem } from "react-native"
import { MainStackParamList } from "types"
import { styles } from "./style"
import { MovieItem, TMovie } from "features/home"

export const MovieRecommendation = () => {
    const { params } = useRoute<RouteProp<MainStackParamList, 'MovieDetail'>>()

    const data = useGetMovieRecommendationFormatted(params.id)

    const renderItem = useCallback<ListRenderItem<TMovie>>(({ item }) => {
        return (
            <MovieItem
                data={item}
                style={styles.movie_item}
            />
        )
    }, [])

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={styles.container}
        />
    )
}
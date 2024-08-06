import { RouteProp, useRoute } from "@react-navigation/native"
import { useGetMovieCastFormatted } from "features/movie-detail/hooks"
import { TMovieCast } from "features/movie-detail/types"
import { useCallback } from "react"
import { FlatList, ListRenderItem, View } from "react-native"
import { MainStackParamList } from "types"
import { MovieCastItem } from 'features/movie-detail/components/movie-cast-item'
import { styles } from "./style"

export const MovieCast = () => {
    const { params } = useRoute<RouteProp<MainStackParamList, 'MovieDetail'>>()

    const data = useGetMovieCastFormatted(params.id)

    console.log('test: ', data)

    const renderItem = useCallback<ListRenderItem<TMovieCast>>(({ item }) => {
        return (
            <MovieCastItem
                data={item}
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
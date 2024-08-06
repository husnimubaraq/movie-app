import { FlatList, ListRenderItem } from "react-native"
import { HeroSection } from 'features/home/components/hero-section'
import { MovieItem } from 'features/home/components/movie-item'
import { LayoutWrapper } from "layouts/default"
import { useCallback } from "react"
import { useGetMoviePopularFormatted } from "features/home/hooks"
import { TMovie } from "features/home/types"
import { styles } from "./style"

export const HomeWrapper = () => {

    const { data } = useGetMoviePopularFormatted()

    const renderItem = useCallback<ListRenderItem<TMovie>>(({ item }) => {
        return (
            <MovieItem
                data={item}
            />
        )
    }, [])

    return (
        <LayoutWrapper>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={styles.columnWrapper}
                ListHeaderComponent={<HeroSection/>}
            />
        </LayoutWrapper>
    )
}
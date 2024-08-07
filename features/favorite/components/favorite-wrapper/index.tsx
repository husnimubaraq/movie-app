import { Text } from "components/base/text"
import { useFavoriteContext } from "contexts"
import { TMovie, MovieItem } from "features/home"
import { LayoutWrapper } from "layouts/default"
import { useCallback } from "react"
import { FlatList, ListRenderItem, View } from "react-native"
import { styles } from "./style"
import { Empty } from "components/empty"

export const FavoriteWrapper = () => {

    const { favorites } = useFavoriteContext()

    const isEmpty = favorites.length === 0

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
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={[styles.contentContainer, isEmpty && styles.emptyContainer]}
                columnWrapperStyle={styles.columnWrapper}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text variant="bold" style={styles.title}>{`Favorite`}</Text>
                    </View>
                }
                ListEmptyComponent={
                    <Empty
                        message="There is no favorite"
                    />
                }
            />
        </LayoutWrapper>
    )
}
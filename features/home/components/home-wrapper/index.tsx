import { ActivityIndicator, FlatList, ListRenderItem, View } from "react-native"
import { HeroSection } from 'features/home/components/hero-section'
import { MovieItem } from 'features/home/components/movie-item'
import { LayoutWrapper } from "layouts/default"
import { useCallback } from "react"
import { useGetMoviePopularFormatted } from "features/home/hooks"
import { TMovie } from "features/home/types"
import { styles } from "./style"
import { colors } from "themes"
import { Empty } from "components/empty"

export const HomeWrapper = () => {

    const { data, hasNextPage, fetchNextPage, isLoading } = useGetMoviePopularFormatted()

    const isEmpty = data.length === 0

    const loadNext = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    const renderItem = useCallback<ListRenderItem<TMovie>>(({ item, index }) => {
        return (
            <MovieItem
                index={index}
                data={item}
            />
        )
    }, [])

    const renderFooter = useCallback(() => {
        if (hasNextPage) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            )
        }
    }, [hasNextPage])

    return (
        <LayoutWrapper>
            {isLoading ? (
                <FlatList
                    key={"#"}
                    data={Array.from(new Array(10))}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={() => (
                        <MovieItem
                            loading
                        />
                    )}
                    numColumns={2}
                    contentContainerStyle={styles.contentContainer}
                    columnWrapperStyle={styles.columnWrapper}
                    ListHeaderComponent={<HeroSection />}
                />
            ) : (
                <FlatList
                    key={"_"}
                    data={data}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                    contentContainerStyle={[styles.contentContainer, isEmpty && styles.emptyContainer]}
                    columnWrapperStyle={styles.columnWrapper}
                    ListHeaderComponent={<HeroSection />}
                    ListEmptyComponent={
                        <Empty
                            message={`Movie not found`}
                        />
                    }
                    onEndReachedThreshold={400}
                    onEndReached={loadNext}
                    removeClippedSubviews
                    maxToRenderPerBatch={10}
                    windowSize={5}
                    ListFooterComponent={renderFooter}
                />
            )}
        </LayoutWrapper>
    )
}
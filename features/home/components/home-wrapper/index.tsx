import { ActivityIndicator, FlatList, ListRenderItem, View } from "react-native"
import { HeroSection } from 'features/home/components/hero-section'
import { MovieItem } from 'features/home/components/movie-item'
import { LayoutWrapper } from "layouts/default"
import { useCallback } from "react"
import { useGetMoviePopularFormatted } from "features/home/hooks"
import { TMovie } from "features/home/types"
import { styles } from "./style"
import { colors } from "themes"
import { MotiView } from "moti"

export const HomeWrapper = () => {

    const { data, hasNextPage, fetchNextPage, isLoading } = useGetMoviePopularFormatted()

    const loadNext = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    const renderItem = useCallback<ListRenderItem<TMovie>>(({ item }) => {
        return (
            <MovieItem
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
                <MotiView
                    transition={{
                        type: 'timing',
                    }}
                >
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
                </MotiView>
            ) : (
                <FlatList
                    key={"_"}
                    data={data}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                    contentContainerStyle={styles.contentContainer}
                    columnWrapperStyle={styles.columnWrapper}
                    ListHeaderComponent={<HeroSection />}
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
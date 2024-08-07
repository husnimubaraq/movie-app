import { LayoutWrapper } from "layouts/default"
import { ActivityIndicator, FlatList, ListRenderItem, View } from "react-native"
import { HeroSection } from 'features/explore/components/hero-section'
import { useCallback, useState } from "react"
import { useGetMovieTrendingFormatted, useGetSearchMovieFormatted } from "features/explore/hooks"
import { TMovie, MovieItem } from "features/home"
import { styles } from "./style"
import { useDebounce } from "hooks/use-debounce"
import { colors } from "themes"
import { Empty } from "components/empty"

export const ExploreWrapper = () => {

    const [query, setQuery] = useState('')

    const queryDebounce = useDebounce(query, 500)
    
    const { 
        data: dataTrending, 
        hasNextPage: hasNextPageTrending, 
        fetchNextPage: fetchNextPageTrending,
        isLoading: isLoadingTrending 
    } = useGetMovieTrendingFormatted()
    const { 
        data: dataSearch, 
        hasNextPage: hasNextPageSearch, 
        fetchNextPage: fetchNextPageSearch,
        isLoading: isLoadingSearch
    } = useGetSearchMovieFormatted({
        query: queryDebounce
    })

    const isEmptySearch = dataSearch.length === 0 && queryDebounce.length > 0
    const isEmptyTrending = dataTrending.length === 0
    const isEmpty = isEmptyTrending || isEmptySearch

    const loadNext = () => {
        if (hasNextPageTrending) {
            fetchNextPageTrending();
        }
        if (hasNextPageSearch) {
            fetchNextPageSearch();
        }
    };

    const renderItem = useCallback<ListRenderItem<TMovie>>(({ item }) => {
        return (
            <MovieItem
                data={item}
                withRate={false}
            />
        )
    }, [])

    const renderFooter = useCallback(() => {
        if (hasNextPageTrending || hasNextPageSearch) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            )
        }
    }, [hasNextPageTrending, hasNextPageSearch])

    return (
        <LayoutWrapper>
            {(isLoadingTrending || isLoadingSearch) ? (
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
                    ListHeaderComponent={
                        <HeroSection
                            query={query}
                            setQuery={setQuery}
                        />
                    }
                />
            ) : (
                <FlatList
                    key={"_"}
                    data={queryDebounce ? dataSearch : dataTrending}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                    contentContainerStyle={[styles.contentContainer, isEmpty && styles.emptyContainer]}
                    columnWrapperStyle={styles.columnWrapper}
                    ListHeaderComponent={
                        <HeroSection
                            query={query}
                            setQuery={setQuery}
                        />
                    }
                    ListEmptyComponent={
                        <Empty
                            message={`Movie search results \nwere not found`}
                        />
                    }
                    onEndReachedThreshold={400}
                    onEndReached={loadNext}
                    removeClippedSubviews
                    maxToRenderPerBatch={10}
                    windowSize={5}
                    ListFooterComponent={isEmpty ? undefined : renderFooter}
                />
            )}
        </LayoutWrapper>
    )
}
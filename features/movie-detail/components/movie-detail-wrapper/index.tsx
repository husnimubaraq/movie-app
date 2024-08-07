import { LayoutWrapper } from "layouts/default"
import { ScrollView, View } from "react-native"
import { styles } from "./style"
import { RouteProp, useRoute } from "@react-navigation/native"
import { MainStackParamList } from "types"
import { Header } from "features/movie-detail/components/header"
import { HeroSection } from "features/movie-detail/components/hero-section"
import { MovieCast } from "features/movie-detail/components/movie-cast"
import { MovieRecommendation } from "features/movie-detail/components/movie-recommendation"
import { useGetMovieDetail } from "features/movie-detail/hooks"
import { Text } from "components/base"
import { spacing } from "themes"

export const MovieDetailWrapper = () => {
    const { params } = useRoute<RouteProp<MainStackParamList, 'MovieDetail'>>()

    const { data } = useGetMovieDetail(params.id)

    return (
        <LayoutWrapper
            translucent
            barStyle="light-content"
        >
            <ScrollView>
                <HeroSection data={data} />
                <View style={styles.container}>
                    <View style={[styles.section]}>
                        <Text variant="medium" style={styles.label}>Story line</Text>
                        <Text style={[styles.description, { paddingHorizontal: spacing.xl }]}>{data?.overview}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text variant="medium" style={styles.label}>Star Cast</Text>
                        <MovieCast/>
                    </View>
                    <View style={styles.section}>
                        <Text variant="medium" style={styles.label}>Recommendations</Text>
                        <MovieRecommendation/>
                    </View>
                </View>
            </ScrollView>
            <Header/>
        </LayoutWrapper>
    )
}
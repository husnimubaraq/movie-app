import { ImageBackground, View } from "react-native"
import { styles } from "./style"
import { RouteProp, useRoute } from "@react-navigation/native"
import { MainStackParamList } from "types"
import { colors } from "themes"
import LinearGradient from "react-native-linear-gradient"
import { Text } from "components/base"
import { RateStar } from "components/rate-star"
import { TProps } from "./type"
import { formatRuntime } from "utils/dayjs"

export const HeroSection = (props: TProps) => {
    const { data } = props

    const { params } = useRoute<RouteProp<MainStackParamList, 'MovieDetail'>>()

    return (
        <>
            <ImageBackground
                src={params.poster_path}
                style={[styles.image_poster]}
            >
                <LinearGradient colors={[colors.transparent, colors.white, colors.white, colors.white]} style={styles.info}>
                    <View style={styles.infoContainer}>
                        <Text variant="bold" style={styles.infoTitle}>{params.original_title}</Text>
                        <View style={styles.infoWrapper}>
                            <RateStar rate={5.5} />
                            <View style={styles.infoCategory}>
                                <Text style={styles.infoLabel}>{data?.genres.map((x) => x.name).join(', ')}</Text>
                            </View>
                            <Text style={styles.infoLabel}>{formatRuntime(data?.runtime ?? 0)}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </>
    )
}
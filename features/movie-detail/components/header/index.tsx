import { View } from "react-native"
import { styles } from "./style"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Button } from "components/base"
import { ChevronLeftIcon, FavoriteIcon, FavoriteOutlineIcon } from "components/icons"
import { colors } from "themes"
import { useFavoriteContext } from "contexts"
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native"
import { MainStackParamList } from "types/index"

export const Header = () => {
    const { params } = useRoute<RouteProp<MainStackParamList, 'MovieDetail'>>()

    const { goBack } = useNavigation()

    const { addToFavorite, favorites } = useFavoriteContext()

    const containerInsets = useSafeAreaInsets()

    const favoriteActive = favorites.some(x => x.id === params.id)

    return (
        <View 
            style={[styles.headerContainer, {
                paddingTop: containerInsets.top
            }]}
        >
            <View style={styles.header}>
                <Button
                    variant="primary"
                    style={styles.button}
                    onPress={() => goBack()}
                >
                    <ChevronLeftIcon size={20} color={colors.black} />
                </Button>

                <Button
                    variant="primary"
                    style={styles.button}
                    onPress={() => addToFavorite(params)}
                >
                    {favoriteActive ? (
                        <FavoriteIcon size={20} color={colors.black} />
                    ) : (
                        <FavoriteOutlineIcon size={20} color={colors.black} />
                    )}
                </Button>
            </View>
        </View>
    )
}
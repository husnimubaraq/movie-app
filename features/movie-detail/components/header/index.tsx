import { View } from "react-native"
import { styles } from "./style"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Button } from "components/base"
import { ChevronLeftIcon, FavoriteIcon } from "components/icons"
import { colors } from "themes"

export const Header = () => {

    const containerInsets = useSafeAreaInsets()

    return (
        <View 
            style={[styles.headerContainer, {
                paddingTop: containerInsets.top
            }]}
        >
            <View style={styles.header}>
                <Button
                    variant="primary"
                >
                    <ChevronLeftIcon size={20} color={colors.white} />
                </Button>

                <Button
                    variant="primary"
                >
                    <FavoriteIcon size={20} color={colors.white} />
                </Button>
            </View>
        </View>
    )
}
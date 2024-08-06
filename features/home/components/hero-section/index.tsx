import { Text } from "components/base/text"
import { LogoIcon, SearchIcon } from "components/icons"
import { TouchableOpacity, View } from "react-native"
import colors from 'tailwindcss/colors'
import { styles } from "./style"

export const HeroSection = () => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <LogoIcon size={50} />
                    <View>
                        <Text>Welcome back to</Text>
                        <Text variant="bold" style={styles.title}>Movie</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                >
                    <SearchIcon size={15} color={colors.neutral[400]} />
                </TouchableOpacity>
            </View>
            <Text variant="medium" style={styles.subtitle}>Populars</Text>
        </>
    )
}
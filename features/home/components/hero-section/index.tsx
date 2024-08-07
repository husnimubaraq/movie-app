import { Text } from "components/base/text"
import { LogoIcon, SearchIcon } from "components/icons"
import { View } from "react-native"
import { colors } from 'themes'
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native"
import { BottomNavigation } from "types/index"
import { Button } from "components/base"

export const HeroSection = () => {

    const { navigate } = useNavigation<BottomNavigation>()

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
                <Button
                    onPress={() => navigate('Explore')}
                >
                    <SearchIcon size={15} color={colors.neutral[400]} />
                </Button>
            </View>
            <Text variant="bold" style={styles.subtitle}>Populars</Text>
        </>
    )
}
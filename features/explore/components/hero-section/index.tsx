import { View } from "react-native"
import { styles } from "./style"
import { Text } from "components/base"

export const HeroSection = () => {

    return (
        <View style={styles.container}>
            <Text variant="bold" style={styles.title}>{`Find movies, TV series, \nand more...`}</Text>
        </View>
    )
}
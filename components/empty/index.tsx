import { View } from "react-native"
import { TProps } from "./type"
import { styles } from "./style"
import { MovieEmptyIcon } from "components/icons"
import { colors } from "themes"
import { Text } from "components/base"

export const Empty = (props: TProps) => {
    const { message } = props

    return (
        <View style={styles.container}>
            <MovieEmptyIcon size={150} color={colors.slate[300]} />
            <Text variant="medium" style={styles.message}>{message}</Text>
        </View>
    )
}
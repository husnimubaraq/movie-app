import { View } from "react-native";
import { TProps } from "./type"
import { StarIcon } from "components/icons";
import colors from 'tailwindcss/colors'
import { Text } from "components/base/text";
import { styles } from "./style";

export const RateStar = (props: TProps) => {
    const { rate } = props

    return (
        <View style={styles.container}>
            <StarIcon size={11} color={colors.yellow[500]} />
            <Text style={styles.label}>({rate.toFixed(1)})</Text>
        </View>
    )
}
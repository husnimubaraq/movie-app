import { View } from "react-native";
import { TProps } from "./type"
import { StarIcon } from "components/icons";
import colors from 'tailwindcss/colors'
import { Text } from "components/base/text";

export const RateStar = (props: TProps) => {
    const { rate } = props

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= rate; i++) {
            stars.push(
                <View key={i}>
                    <StarIcon size={11} color={colors.yellow[500]} />
                </View>
            );
        }
        return stars;
    }

    return (
        <View className="flex-row items-center gap-x-1">
            <View className="flex-row items-center gap-x-1">
                {renderStars()}
            </View>
            <Text className="text-xs">({rate.toFixed(1)})</Text>
        </View>
    )
}
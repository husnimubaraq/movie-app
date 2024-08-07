import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "components/base/text";
import { TProps } from "./type";
import { RateStar } from "components/rate-star";
import { styles } from "./style";
import { StackActions, useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types";

export const MovieItem = (props: TProps) => {
    const { data, loading } = props

    const { dispatch } = useNavigation<StackNavigation>()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.container, props.style]}
            onPress={() => {
                if(data){
                    dispatch(
                        StackActions.push('MovieDetail', data)
                    )
                }
            }}
        >
            <Image
                source={{
                    uri: data?.poster_path
                }}
                style={styles.image}
            />
            <View style={styles.wrapper}>
                <Text variant="bold" style={styles.title} numberOfLines={1}>{data?.original_title}</Text>
                <RateStar rate={data?.vote_average ?? 0} />
            </View>
        </TouchableOpacity>
    )
}
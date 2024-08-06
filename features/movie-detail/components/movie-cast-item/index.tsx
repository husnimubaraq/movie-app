import { Image, View } from "react-native";
import { TProps } from "./type";
import { styles } from "./style";
import { Text } from "components/base";

export const MovieCastItem = (props: TProps) => {
    const { data } = props

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: data.profile_path
                }}
                style={styles.profile}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{data.known_for_department}</Text>
                <Text variant="bold" style={styles.name}>{data.name}</Text>
            </View>
        </View>
    )
}
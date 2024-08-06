import { TextStyle, ViewStyle } from "react-native";
import { colors } from "themes";
import { ObjectIndex } from "types/object";

export const containerVariants: ObjectIndex<string, ViewStyle> = {
    default: {
        backgroundColor: colors.slate[100],
    },
    primary: {
        backgroundColor: colors.primary,
    }
}

export const titleVariants: ObjectIndex<string, TextStyle> = {
    default: {
        color: colors.black
    },
    primary: {
        color: colors.white,
    }
}
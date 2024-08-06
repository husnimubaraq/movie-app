import { TextStyle } from "react-native";
import { ObjectIndex } from "types";

export const fontVariants: ObjectIndex<string, TextStyle> = {
    normal: {
        fontWeight: '400'
    },
    medium: {
        fontWeight: '500'
    },
    semibold: {
        fontWeight: '600'
    },
    bold: {
        fontWeight: 'bold'
    },
}
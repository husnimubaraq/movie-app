import { StyleSheet } from "react-native";
import { colors, fontSize } from "themes";

export const styles = StyleSheet.create({
    text: {
        ...fontSize.sm,
        color: colors.black,
        fontFamily: 'Montserrat',
    }
})
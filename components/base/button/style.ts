import { StyleSheet } from "react-native";
import { colors, fontSize, rounded, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        height: spacing["7xl"],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: rounded.md,
        paddingHorizontal: spacing.lg
    },
    title: {
        ...fontSize.sm
    }
})
import { StyleSheet } from "react-native";
import { colors, fontSize, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.md
    },
    message: {
        ...fontSize.lg,
        color: colors.neutral[500],
        textAlign: 'center'
    }
})
import { StyleSheet } from "react-native";
import { colors, fontSize, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        gap: spacing.xl
    },
    section: {
        gap: spacing.lg,
        paddingHorizontal: spacing.xl,
    },
    label: {
        ...fontSize.lg
    },
    description: {
        color: colors.neutral[500],
        textAlign: 'justify'
    }
})
import { StyleSheet } from "react-native";
import { colors, fontSize, rounded, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md
    },
    profile: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: rounded.full
    },
    info: {
        gap: spacing.sm,
    },
    title: {
        ...fontSize.xs,
        color: colors.neutral[500],
    },
    name: {
        ...fontSize.sm,
        color: colors.black,
    }
})
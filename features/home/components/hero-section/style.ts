import { StyleSheet } from "react-native";
import { colors, fontSize, rounded, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: spacing.md
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.lg
    },
    title: {
        ...fontSize.xl
    },
    subtitle: {
        ...fontSize.lg,
        marginBottom: spacing.md,
    },
    button: {
        backgroundColor: colors.slate[100],
        height: spacing["5xl"],
        width: spacing["5xl"],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: rounded.md
    }
})
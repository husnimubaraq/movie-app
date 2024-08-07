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
        ...fontSize.xl,
        marginBottom: spacing.md,
    }
})
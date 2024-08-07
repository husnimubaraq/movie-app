import { StyleSheet } from "react-native";
import { colors, fontSize, rounded, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.xl,
        gap: spacing.lg
    },
    title: {
        ...fontSize.xl
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.lg,
        borderWidth: 1,
        borderColor: colors.neutral[300],
        paddingHorizontal: spacing.xl,
        borderRadius: rounded.xl,
        marginTop: spacing.lg
    },
    input: {
        ...fontSize.base,
        flex: 1,
        color: colors.black
    }
})
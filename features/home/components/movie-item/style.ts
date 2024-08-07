import { StyleSheet } from "react-native";
import { colors, fontSize, rounded, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        borderRadius: rounded.xl,
        width: '49%',
        backgroundColor: colors.slate[100]
    },
    wrapper: {
        padding: spacing.lg,
        gap: spacing.md
    },
    image: {
        width: '100%',
        height: 200,
        borderTopRightRadius: rounded.xl,
        borderTopLeftRadius: rounded.xl
    },
    title: {
        ...fontSize.sm
    },
    loading: {
        height: 200
    }
})
import { StyleSheet } from "react-native";
import { fontSize, spacing } from "themes";

export const styles = StyleSheet.create({
    contentContainer: {
        padding: spacing.xl,
        gap: spacing.md,
    },
    emptyContainer: {
        flex: 1
    },
    columnWrapper: {
        gap: spacing.md
    },
    header: {
        paddingVertical: spacing.xl,
    },
    title: {
        ...fontSize.xl
    },
})
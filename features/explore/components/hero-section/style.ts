import { StyleSheet } from "react-native";
import { fontSize, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        padding: spacing.xl,
        gap: spacing.lg
    },
    title: {
        ...fontSize.xl
    }
})
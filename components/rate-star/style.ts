import { StyleSheet } from "react-native";
import { fontSize, spacing } from "themes";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm
    },
    label: {
        ...fontSize.xs
    }
})
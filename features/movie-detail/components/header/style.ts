import { StyleSheet } from "react-native";
import { colors, spacing } from "themes";

export const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.lg,
    },
    button: {
        backgroundColor: colors.slate[100],
        opacity: 0.5
    }
})
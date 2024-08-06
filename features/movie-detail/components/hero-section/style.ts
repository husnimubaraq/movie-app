import { StyleSheet } from "react-native";
import { colors, fontSize, spacing } from "themes";

export const styles = StyleSheet.create({
    image_poster: {
        width: '100%',
        height: 400,
        objectFit: 'cover'
    },
    info: {
        height: 150,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoContainer: {
        alignItems: 'center',
        marginTop: spacing["6xl"]
    },
    infoTitle: {
        ...fontSize.xl
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        marginTop: spacing.sm
    },
    infoLabel: {
        ...fontSize.xs,
    },
    infoCategory: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.neutral[400],
        paddingHorizontal: spacing.md
    },
})
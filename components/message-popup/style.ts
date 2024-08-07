import { StyleSheet } from "react-native";
import { colors, fontSize, rounded, spacing } from "themes";

export const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(30, 30, 30, 0.4)'
    },
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: spacing["2xl"],
        paddingVertical: spacing["4xl"],
        marginHorizontal: spacing["2xl"],
        borderRadius: rounded.xl,
        alignItems: 'center'
    },
    title: {
        ...fontSize.xl,
        textAlign: 'center'
    },
    message: {
        ...fontSize.base,
        color: colors.black,
        textAlign: 'center',
        marginVertical: spacing["2xl"]
    },
    iconContainer: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red[300],
        borderRadius: rounded["2xl"],
        marginBottom: spacing.xl
    },
    button: {
        width: '70%'
    }
})
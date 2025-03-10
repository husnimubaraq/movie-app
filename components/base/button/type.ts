import { PropsWithChildren } from "react";
import { TextStyle, TouchableOpacityProps, ViewProps } from "react-native";

export type TProps = {
    title?: string
    leftNode?: React.ReactElement
    rightNode?: React.ReactElement
    variant?: "default" | "primary"
    textVariant?: 'normal' | 'medium' | 'semibold' | 'bold'
    textStyle?: TextStyle
} & PropsWithChildren & TouchableOpacityProps
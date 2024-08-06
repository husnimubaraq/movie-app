import { PropsWithChildren } from "react"
import { TextProps } from "react-native"

export type TProps = {
    variant?: 'normal' | 'medium' | 'semibold' | 'bold'
} & PropsWithChildren<TextProps>
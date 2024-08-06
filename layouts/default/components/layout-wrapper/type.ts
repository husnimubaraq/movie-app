import { PropsWithChildren } from "react";
import { StatusBarStyle } from "react-native";

export type TProps = {
    barStyle?: StatusBarStyle
    barBackgoroundColor?: string
    translucent?: boolean
} & PropsWithChildren
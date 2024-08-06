import { TextStyle } from "react-native"
import { ObjectIndex, TFontVariant } from "types"

export const rounded = {
    "none": 0,
    "sm": 2,
    "md": 6,
    "lg": 8,
    "xl": 12,
    "2xl": 16,
    "3xl": 24,
    "4xl": 26,
    "5xl": 28,
}

export const spacing = {
    "none": 0,
    "sm": 4,
    "md": 8,
    "lg": 12,
    "xl": 16,
    "2xl": 20,
    "3xl": 24,
    "4xl": 28,
    "5xl": 32,
}

export const fontSize: ObjectIndex<TFontVariant, TextStyle> = {
    "xs": {
        fontSize: 12, 
        lineHeight: 16
    },
    "sm": {
        fontSize: 14,
        lineHeight: 20
    },
    "base": {
        fontSize: 16, 
        lineHeight: 24
    },
    "lg": {
        fontSize: 18, 
        lineHeight: 28
    },
    "xl": {
        fontSize: 20, 
        lineHeight: 28
    },
    "2xl": {
        fontSize: 24, 
        lineHeight: 32
    },
    "3xl": {
        fontSize: 30,
        lineHeight: 36
    },
    "4xl": {
        fontSize: 36, 
        lineHeight: 40
    },
    "5xl": {
        fontSize: 48,
        lineHeight: 1
    }
}
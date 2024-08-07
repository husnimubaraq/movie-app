import { TMovie } from "features/home/types"
import { TouchableOpacityProps } from "react-native"

export type TProps = {
    data?: TMovie
    index?: number
    withRate?: boolean
    loading?: boolean
} & TouchableOpacityProps
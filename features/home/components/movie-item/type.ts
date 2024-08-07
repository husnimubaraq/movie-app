import { TMovie } from "features/home/types"
import { TouchableOpacityProps } from "react-native"

export type TProps = {
    data?: TMovie
    withRate?: boolean
    loading?: boolean
} & TouchableOpacityProps
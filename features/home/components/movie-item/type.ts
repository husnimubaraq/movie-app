import { TMovie } from "features/home/types"
import { TouchableOpacityProps } from "react-native"

export type TProps = {
    data?: TMovie
    loading?: boolean
} & TouchableOpacityProps
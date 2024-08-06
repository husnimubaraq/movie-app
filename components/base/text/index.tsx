import { Text as CustomText } from 'react-native'
import { TProps } from './type'
import { fontVariants } from './data'
import { styles } from './style'

export const Text = (props: TProps) => {
    const { children, variant = 'normal' } = props

    return (
        <CustomText
            {...props}
            style={[
                styles.text,
                fontVariants[variant],
                props.style
            ]}
        >
            {children}
        </CustomText>
    )
}
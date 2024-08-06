import { TouchableOpacity } from "react-native"
import { TProps } from "./type"
import { Text } from "components/base/text"
import { styles } from "./style"
import { containerVariants } from "./data"

export const Button = (props: TProps) => {
    const {
        title,
        leftNode,
        rightNode,
        variant = 'default',
        textVariant = 'medium',
        textStyle,
        children
    } = props
    
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[
                styles.container,
                containerVariants[variant],
                props.style
            ]}
        >
            {children ? children : (
                <>
                    {leftNode && leftNode}
                    <Text variant={textVariant} style={[styles.title, textStyle]}>{title}</Text>
                    {rightNode && rightNode}
                </>
            )}
        </TouchableOpacity>
    )
}
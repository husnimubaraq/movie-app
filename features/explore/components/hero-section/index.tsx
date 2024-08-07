import { TextInput, View } from "react-native"
import { styles } from "./style"
import { Text } from "components/base"
import { SearchIcon } from "components/icons"
import { colors } from "themes"
import { TProps } from "./type"

export const HeroSection = (props: TProps) => {
    const { query, setQuery } = props

    return (
        <View style={styles.container}>
            <Text variant="bold" style={styles.title}>{`Find movies, TV series, \nand more...`}</Text>
            <View style={styles.inputContainer}>
                <SearchIcon size={20} color={colors.neutral[300]} />
                <TextInput 
                    style={styles.input}
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Search..."
                    placeholderTextColor={colors.neutral[300]}
                />
            </View>
        </View>
    )
}
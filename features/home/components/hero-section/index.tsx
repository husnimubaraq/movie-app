import { Text } from "components/base"
import { LogoIcon, SearchIcon } from "components/icons"
import { TouchableOpacity, View } from "react-native"
import colors from 'tailwindcss/colors'

export const HeroSection = () => {

    return (
        <>
            <View className="flex-row items-center justify-between mb-5">
                <View className="flex-row items-center gap-x-3">
                    <LogoIcon size={50} />
                    <View>
                        <Text className="">Welcome back to</Text>
                        <Text className="font-bold text-xl">Movie</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="bg-slate-100 w-10 h-10 rounded-md items-center justify-center"
                >
                    <SearchIcon size={15} color={colors.neutral[400]} />
                </TouchableOpacity>
            </View>
            <Text className="text-xl font-medium mb-2">Populars</Text>
        </>
    )
}
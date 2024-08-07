import { Text } from "components/base/text"
import { LayoutWrapper } from "layouts/default"
import { View } from "react-native"
import { HeroSection } from 'features/explore/components/hero-section'

export const ExploreWrapper = () => {

    return (
        <LayoutWrapper>
            <HeroSection/>
        </LayoutWrapper>
    )
}
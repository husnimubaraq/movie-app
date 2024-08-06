import { NavigationProp } from "@react-navigation/native"
import { TMovie } from "features/home"

export type BottomStackParamList = {
    Home: undefined
    Explore: undefined
    Favorite: undefined
}

export type BottomNavigation = NavigationProp<BottomStackParamList>;

export type MainStackParamList = {
    BottomNavigator: undefined
    MovieDetail: TMovie
}

export type StackNavigation = NavigationProp<MainStackParamList>;
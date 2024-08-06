import { NavigationProp } from "@react-navigation/native"

export type BottomStackParamList = {
    Home: undefined
    Explore: undefined
    Favorite: undefined
}

export type BottomNavigation = NavigationProp<BottomStackParamList>;

export type MainStackParamList = {
    BottomNavigator: undefined
    MovieDetail: undefined
}

export type StackNavigation = NavigationProp<MainStackParamList>;
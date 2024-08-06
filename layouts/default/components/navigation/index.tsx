import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomStackParamList, MainStackParamList } from 'types/navigator';
import { HomeWrapper } from 'features/home';
import { ExploreWrapper } from 'features/explore';
import { ExploreIcon, ExploreOutlineIcon, FavoriteIcon, FavoriteOutlineIcon, HomeIcon, HomeOutlineIcon } from 'components/icons';
import { FavoriteWrapper } from 'features/favorite';
import { colors } from 'themes';

const BottomStack = createBottomTabNavigator<BottomStackParamList>();

const BottomNavigator = () => {
    const { Navigator, Screen } = BottomStack

    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: colors.primary
            }}
        >
            <Screen 
                name='Home' 
                component={HomeWrapper} 
                options={{
                    tabBarIcon: ({ focused, color }) => focused ? <HomeIcon color={color}/> : <HomeOutlineIcon color={color}/>
                }}
            />
            <Screen 
                name='Explore' 
                component={ExploreWrapper} 
                options={{
                    tabBarIcon: ({ focused, color }) => focused ? <ExploreIcon color={color}/> : <ExploreOutlineIcon color={color}/>
                }}
            />
            <Screen 
                name='Favorite' 
                component={FavoriteWrapper} 
                options={{
                    tabBarIcon: ({ focused, color }) => focused ? <FavoriteIcon color={color}/> : <FavoriteOutlineIcon color={color}/>
                }}
            />
        </Navigator>
    )
}

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const Navigation = () => {
    const { Navigator, Screen, Group } = MainStack

    return (
        <NavigationContainer>
            <Navigator
                initialRouteName='BottomNavigator'
            >
                <Group>
                    <Screen name='BottomNavigator' options={{ headerShown: false }} component={BottomNavigator} />
                </Group>
            </Navigator>
        </NavigationContainer>
    )
}
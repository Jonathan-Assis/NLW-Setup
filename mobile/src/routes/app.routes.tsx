import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import * as Screens from '../screens'

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen 
                name="Home"
                component={Screens.Home}
            />
            <Screen 
                name="Habit"
                component={Screens.Habit}
            />
            <Screen 
                name="NewHabit"
                component={Screens.NewHabit}
            />
        </Navigator>
    )
}
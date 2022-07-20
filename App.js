import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";

import Login from './screen/Login';
import ForgotPassword from './screen/ForgotPassword';
import Home from './screen/Home'
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "transparent"
    }
};

const Stack = createStackNavigator()

const App = () => {
    const [loaded] = useFonts({
        SourceBold: require("./assets/fonts/SourceSansPro-Bold.ttf"),
        SourceSemiBold: require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
        SourceRegular: require("./assets/fonts/SourceSansPro-Regular.ttf"),
        SourceLight: require("./assets/fonts/SourceSansPro-Light.ttf"),
    })

    if (!loaded) return null;

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                headerShown: false
            }}
                initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
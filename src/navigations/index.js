import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../constants/appConstants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/color';
import DrawerContent from '../components/DrawerContent';

// importing all the screens
import Splash from '../screens/SplashScreen';
import SingUp from '../screens/SignUpScreen';
import Home from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import AboutUs from '../screens/AboutUs';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: (props) => {
                    let iconName;
                    if (route.name === Screens.HOME) {
                        iconName = 'home';
                    } else if (route.name === Screens.PROFILE) {
                        iconName = 'account';
                    }
                    return <Icon name={iconName} size={20} color={Colors.TWITTER_BLUE} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.TWITTER_BLUE,
                inactiveTintColor: Colors.GRAY,
            }}
        >
            <Tab.Screen name={Screens.HOME} component={Home} />
            <Tab.Screen name={Screens.PROFILE} component={Profile} />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
            <Drawer.Screen name={Screens.DASHBOARD} component={BottomNavigator} />
            <Drawer.Screen name={Screens.ABOUT_US} component={AboutUs} />
        </Drawer.Navigator>
    );
}

export default (props) => {
    return (
        <MainStack.Navigator mode="card" headerMode="none">
            <MainStack.Screen
                name={Screens.SPLASH}
                component={Splash}
            />
            <MainStack.Screen
                name={Screens.SING_UP}
                component={SingUp}
            />
            <MainStack.Screen
                name={Screens.APP}
                component={DrawerNavigator}
            />
        </MainStack.Navigator>
    );
}
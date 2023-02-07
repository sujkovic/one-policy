import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Market from './screens/Market';
import Wallet from './screens/Wallet';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();
const tabs = [
    'Market',
    'Wallet',
    'Profile'
];

export default function MainContainer() {
    return(
        <Tab.Navigator
            initialRouteName={tabs[1]}
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#495371',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: [{
                display: "flex"
            },
            null
            ],
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
    
                if (rn === tabs[0]) {
                    iconName = focused ? 'basket' : 'basket-outline';
                } 
                else if (rn === tabs[1]) {
                    iconName = focused ? 'wallet' : 'wallet-outline';
                } 
                else if (rn === tabs[2]) {
                    iconName = focused ? 'person' : 'person-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            >
            <Tab.Screen name={tabs[0]} component={Market} />
            <Tab.Screen name={tabs[1]} component={Wallet} />
            <Tab.Screen name={tabs[2]} component={Profile} />
        </Tab.Navigator>
    );
}
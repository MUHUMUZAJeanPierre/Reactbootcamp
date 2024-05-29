import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Login from './Login';
import SettingsScreen from './SettingsScreen';
import Icon from "react-native-vector-icons/Ionicons";
import Detail from './Detail';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    // tabBarOptions={{
    //   activeTintColor: "#FDD130",
    //   inactiveTintColor: "black",
    //   style: {
    //     backgroundColor: "black", 
    //   },
    //   tarBarStyle:{
    //     backgroundColor:'black',
    //   }
    // }}
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          tabBarStyle: {
            backgroundColor: 'black'
          }
        }} 
      />
      <Tab.Screen 
        name='Detail' 
        component={Detail} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-outline" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name='Profile' 
        component={Login} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="log-in-outline" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

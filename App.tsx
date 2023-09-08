/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {useContext} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Onboarding from './src/features/onboarding/onboarding_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/features/auth/login_screen';
import HomeScreen from './src/features/dashboard/home_scree';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/features/dashboard/profile_screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppColors } from './src/core/utils/utils_exports';
import FavouriteScreen from './src/features/dashboard/favourite_screen';
import SignUpScreen from './src/features/auth/signup_screen';
import {getValue} from './src/core/local_storage/storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import { userToken } from './src/core/local_storage/context';
export type AuthStack = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined
};
export type Dashboard = {
  Home: undefined;
  Profile: undefined;
  Favourite: undefined;
}

function App(): JSX.Element {
  const Stack = createStackNavigator<AuthStack>();
  const Tab = createBottomTabNavigator<Dashboard>();
  const token = useContext(userToken);
  function DashBoardScreens() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: AppColors.lightGrey
        }
      }}>
        <Tab.Screen
          options={{
            title: 'Profile'
          }}
          name='Profile'
          component={ProfileScreen} />
          <Tab.Screen
            options={{
              title: 'Home',
              tabBarIcon: () => {
                return <Icon name="home-outline" size={24} color="black" />
              }
            }}
            name='Home'
            component={HomeScreen} />
        <Tab.Screen
          options={{
            title: 'Favourite'
          }}
          name='Favourite'
          component={FavouriteScreen} />
      </Tab.Navigator>
    );
  }
 async  function getToken() {
  return  await EncryptedStorage.getItem('token')
  }
  return (
    <>
      <StatusBar hidden />
      {
        token !== undefined ? <Onboarding /> : 
        
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {/* <Stack.Screen name='Onboarding' component={Onboarding} /> */}
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Home' component={DashBoardScreens} />
      </Stack.Navigator>
    </NavigationContainer>
      }
    </>
  );
}

export default App;

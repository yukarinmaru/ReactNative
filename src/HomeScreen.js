import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ComposeScreen } from './ComposeScreen';
import { MainScreen } from './MainScreen';

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
    return (
        <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{
                title: 'メモ帳'
              }}
            />
            {/* (1) */}
            <Stack.Screen
                name="Compose"
                component={ComposeScreen}
                options={{
                title: '作成'
                }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Abcd } from '../screens/Abcd';

type HomeStackParamList = {
  Abcd: undefined;
};

const AuthStack = createStackNavigator<HomeStackParamList>();

export function HomeNavigation() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Abcd" component={Abcd} />
    </AuthStack.Navigator>
  );
}
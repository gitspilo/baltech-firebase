import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Abcd } from '../screens/Abcd';
import { Features } from '../screens/Features';

export type HomeStackParamList = {
  Abcd: undefined;
  Features: undefined;
};

const Hometack = createStackNavigator<HomeStackParamList>();

export function HomeNavigation() {
  return (
    <Hometack.Navigator>
      <Hometack.Screen name="Features" component={Features} />
      <Hometack.Screen name="Abcd" component={Abcd} />
    </Hometack.Navigator>
  );
}
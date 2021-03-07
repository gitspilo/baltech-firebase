import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Block } from 'galio-framework';
import { AuthNavigation } from '../../navigations/AuthNavigation';

export function Root() {
  return (
    <NavigationContainer>
      <Block flex>
        <AuthNavigation />
      </Block>
    </NavigationContainer>
  );
}
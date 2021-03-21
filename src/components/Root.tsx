import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Block } from 'galio-framework';
import { useSelector } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import { NavigatorSwitch } from '../navigations/NavigatorSwitch';
import { RootState } from '../../store';
import { navigationRef } from "../helpers/rootNavigation";

export default function Root() {
  const alerts = useSelector((state: RootState) => state.alerts.all);
  const alertsProcessed = useRef(0);
  const dropdown = useRef<DropdownAlert>(null);

  useEffect(() => {
    if (!dropdown.current) return;
    if (alerts.length <= alertsProcessed.current) return;

    const [alert] = alerts.slice(-1);
    dropdown.current.alertWithType(alert.type, alert.title, alert.message);
  }, [alerts, alertsProcessed]);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Block flex>
          <NavigatorSwitch />
          <DropdownAlert ref={dropdown} closeInterval={5000} />
        </Block>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
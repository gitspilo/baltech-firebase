import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AuthNavigation } from './AuthNavigation';
import { HomeNavigation } from './HomeNavigation';

interface Props {};

export function NavigatorSwitch({}: Props) {
  const isAuthenticated = useSelector((state: RootState) => state.session.auth);

  if (!isAuthenticated) {
    return <AuthNavigation />;
  } else {
    return <HomeNavigation />;
  }
}
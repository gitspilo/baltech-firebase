import React, { useEffect } from 'react';
import { Block } from 'galio-framework';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../store';
import LetterBox from '../components/LetterBox';

export function Abcd() {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {    
    dispatch.abcd.loadAbcd();
  }, []);

  return (
    <LetterBox/>
  )
};
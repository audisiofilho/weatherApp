import React from 'react';
import {View} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {CardContainer, CardText, CardTitle} from './styles';

export default function MainCard(props) {
  function Icon() {
    if (props.icon === 1) {
      return (
        <Feather name="sunrise" style={{color: '#fff', margin: 15}} size={40} />
      );
    }
    if (props.icon === 2) {
      return (
        <Feather name="sunset" style={{color: '#fff', margin: 15}} size={40} />
      );
    }
  }

  return (
    <CardContainer backgroundColor={props.backgroundColor}>
      <CardTitle>{props.title}</CardTitle>
      <Icon></Icon>
      <CardText>{props.sun}</CardText>
    </CardContainer>
  );
}

import React from 'react';
import {View} from 'react-native';

import {Container, TitleText} from './styles';

export default function InfoCardContent(props) {
  return (
    <Container>
      <TitleText style={{color: props.theme ? '#fff' : '#000'}}>
        {props.title}
      </TitleText>

      <TitleText style={{color: props.theme ? '#fff' : '#000'}}>
        {props.value}
      </TitleText>
    </Container>
  );
}

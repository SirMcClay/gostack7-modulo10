import React from 'react';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

export default function SelectDateTime() {
  return (
    <Background>
      <Container>
        <DateInput />
      </Container>
    </Background>
  );
}

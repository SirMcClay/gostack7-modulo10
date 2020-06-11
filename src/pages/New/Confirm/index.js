import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ navigation, route }) {
  const { provider, time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  function providerImg(data) {
    if (!data.avatar) {
      return `https://api.adorable.io/avatar/50/${data.name}.png`;
    }

    return __DEV__
      ? `http://192.168.1.135:3333/files/${data.avatar.path}`
      : data.avatar.url;
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: providerImg(provider),
          }}
        />

        <Name>{provider.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={() => {}}>Confirmar agendamento</SubmitButton>
      </Container>
    </Background>
  );
}

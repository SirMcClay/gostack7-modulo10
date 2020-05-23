import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  function providerImg(data) {
    if (!data.provider.avatar) {
      return `https://api.adorable.io/avatar/50/${data.provider.name}.png`;
    }

    return __DEV__
      ? `http://192.168.1.135:3333/files/${data.provider.avatar.path}`
      : data.provider.avatar.url;
  }

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: providerImg(data),
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7];

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointmens() {
      const response = await api.get('appointments');
    }
  }, []);

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

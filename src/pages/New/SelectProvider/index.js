import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import api from '~/services/api';

import Background from '~/components/Background';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

export default function SelectProvider() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

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
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider>
              <Avatar
                source={{
                  uri: providerImg(provider),
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

/* SelectProvider.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.shape,
  }).isRequired,
}; */

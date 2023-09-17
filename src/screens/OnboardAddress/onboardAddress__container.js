import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { createAddressCustomized } from '../../graphql/mutationsCustomized';
import { FormikProvider } from '../../providers/FormikProvider';
import { useUser } from '../../providers/UserProvider';
import { searchAddressService } from '../../services/addressService';
import { maskRemoveService } from '../../services/maskService';
import { validationSchemaOnboardAddress } from '../../services/validationService/validationOnboardAddressService';

import OnbaordAddressView from './onboardAddress__view';


const OnboardAddressContainer = () => {
  const { user } = useUser();
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const initialValues = {
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    stateInitials: 'ES',
    stateName: 'Espírito Santo',
  };

  const [createAddressDatabase] = useMutation(createAddressCustomized);

  const onSubmit = async (data) => {
    setLoading(true);
    const body = {
      input: {
        id: maskRemoveService(user.cpf),
        zipCode: maskRemoveService(data.zipCode),
        street: data.street,
        number: data.number,
        complement: data.complement,
        neighborhood: data.neighborhood,
        city: data.city,
        stateInitials: data.stateInitials,
        stateName: data.stateName,
      },
    };
    try {
      await createAddressDatabase({ variables: body });
      setLoading(false);
      navigate('Home');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const searchAddress = async (zipCodeParam, setFieldValue) => {
    setLoadingButton(true);
    const [error, res] = await searchAddressService(zipCodeParam);

    if (error || res.erro) {
      setFieldValue('street', '');
      setFieldValue('number', '');
      setFieldValue('complement', '');
      setFieldValue('neighborhood', '');
      setFieldValue('city', '');
      setFieldValue('stateInitials', '');
      setLoadingButton(false);
    } else {
      setFieldValue('street', res.logradouro);
      setFieldValue('number', '');
      setFieldValue('complement', '');
      setFieldValue('neighborhood', res.bairro);
      setFieldValue('city', res.localidade);
      setFieldValue('stateInitials', res.uf);
      setLoadingButton(false);
    }
  };

  return (
    <FormikProvider
      initialValues={initialValues}
      validationSchema={validationSchemaOnboardAddress}
      onSubmit={onSubmit}
    >
      <OnbaordAddressView
        searchAddress={searchAddress}
        loading={loading}
        loadingButton={loadingButton}
      />
    </FormikProvider>
  );
};

export default OnboardAddressContainer;

import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import states from '../../constants/states';
import { createAddressCustomized, updateAddressCustomized } from '../../graphql/mutationsCustomized';
import useModalMessage from '../../hooks/useModalMessage';
import { useSubscriptionAddress } from '../../hooks/useSubscriptionAddress';
import { FormikProvider } from '../../providers/FormikProvider';
import { useUser } from '../../providers/UserProvider';
import { searchAddressService } from '../../services/addressService';
import { maskRemoveService, masks } from '../../services/maskService';
import { validationSchemaEditAddress } from '../../services/validationService/validationEditDataService';

import EditAddressView from './editAddress__view';

const EditAddressContainer = () => {
  const { goBack } = useNavigation();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const { showModalMessage } = useModalMessage();

  const [createAddress] = useMutation(createAddressCustomized);
  const [editAddress] = useMutation(updateAddressCustomized);

  const initialValues = user.address ? {
    zipCode: masks.zipCode(user.address.zipCode),
    street: user.address.street,
    number: user.address.number,
    complement: user.address.complement,
    neighborhood: user.address.neighborhood,
    city: user.address.city,
    stateInitials: user.address.stateInitials,
    stateName: user.address.stateName,
  }
    : {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      stateInitials: '',
      stateName: '',
    };

  useSubscriptionAddress();

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
      const res = user.address
        ? await editAddress({ variables: body })
        : await createAddress({ variables: body });
      const editData = user.address ? res.data.updateAddress : res.data.createAddress;

      setUser({
        ...user,
        address: {
          zipCode: maskRemoveService(editData.zipCode),
          street: editData.street,
          number: editData.number,
          complement: editData.complement,
          neighborhood: editData.neighborhood,
          city: editData.city,
          stateInitials: editData.stateInitials,
          stateName: editData.stateName,
        },
      });
      setLoading(false);
      goBack();
    } catch (error) {
      setLoading(false);
      showModalMessage({
        title: 'Ops!',
        description: 'Tivemos um problema ao editar seus dados de endereço, tente novamente.',
      });
    }
  };

  const navigateGoBack = () => {
    goBack();
  };

  const searchAddress = async (zipCodeParam, setFieldValue) => {
    setLoading(true);
    const [error, res] = await searchAddressService(zipCodeParam);

    if (error || res.erro) {
      setFieldValue('street', '');
      setFieldValue('number', '');
      setFieldValue('complement', '');
      setFieldValue('neighborhood', '');
      setFieldValue('city', '');
      setFieldValue('stateInitials', '');
      setFieldValue('stateName', '');
      setLoading(false);
    } else {
      setFieldValue('street', res.logradouro);
      setFieldValue('number', '');
      setFieldValue('complement', '');
      setFieldValue('neighborhood', res.bairro);
      setFieldValue('city', res.localidade);
      setFieldValue('stateInitials', res.uf);
      setFieldValue('stateName', states.filter((elt) => elt.initials === res.uf)[0].name);
      setLoading(false);
    }
  };

  return (
    <FormikProvider
      initialValues={initialValues}
      validationSchema={validationSchemaEditAddress}
      onSubmit={onSubmit}
    >
      <EditAddressView
        loading={loading}
        searchAddress={searchAddress}
        onPressBack={navigateGoBack}
      />
    </FormikProvider>
  );
};

export default EditAddressContainer;

import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { updateUserCustomized } from '../../graphql/mutationsCustomized';
import useModalMessage from '../../hooks/useModalMessage';
import { FormikProvider } from '../../providers/FormikProvider';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService, masks } from '../../services/maskService';
import { validationSchemaEditUser } from '../../services/validationService/validationEditDataService';

import EditUserView from './editUser__view';

const EditUserContainer = () => {
  const { goBack } = useNavigation();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const { showModalMessage } = useModalMessage();

  const [editUser] = useMutation(updateUserCustomized);

  const initialValues = {
    name: user.name,
    email: user.email,
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const body = {
      input: {
        id: maskRemoveService(user.cpf),
        name: data.name,
        email: data.email,
        cellphone: maskRemoveService(data.cellphone),
      },
    };

    try {
      const res = await editUser({ variables: body });
      const editData = res.data.updateUser;
      setUser({
        ...user,
        name: editData.name,
        email: editData.name,
        cellphone: masks.cellphone(editData.cellphone),
      });
      setLoading(false);
      goBack();
    } catch (error) {
      setLoading(false);
      showModalMessage({
        title: 'Ops!',
        description: 'Tivemos um problema ao editar seus dados, tente novamente.',
      });
    }
  };

  const navigateGoBack = () => {
    goBack();
  };

  return (
    <FormikProvider
      initialValues={initialValues}
      validationSchema={validationSchemaEditUser}
      onSubmit={onSubmit}
    >
      <EditUserView
        loading={loading}
        onPressBack={navigateGoBack}
      />
    </FormikProvider>
  );
};

export default EditUserContainer;

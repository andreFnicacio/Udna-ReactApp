import propTypes from 'prop-types';
import React from 'react';

import Wizard from '../../layouts/Wizard';
import { useFormikForm } from '../../providers/FormikProvider';

import Cellphone from './components/Cellphone';
import CPF from './components/CPF';
import Email from './components/Email';
import Name from './components/Name';
import Password from './components/Password';

const OnboardView = ({
  goBack,
  loading,
}) => {
  const form = useFormikForm();

  return (
    <Wizard
      loading={loading}
      goBack={goBack}
      form={form}
      steps={[{
        fields: ['cpf'],
        component: <CPF />,
      },
      {
        fields: ['name'],
        component: <Name />,
      },
      {
        fields: ['email', 'emailConfirmation'],
        component: <Email />,
      },
      {
        fields: ['password', 'passwordConfirmation'],
        component: <Password />,
      },
      {
        fields: ['cellphone'],
        component: <Cellphone />,
      }]}
    />
  );
};

OnboardView.propTypes = {
  goBack: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};

export default OnboardView;

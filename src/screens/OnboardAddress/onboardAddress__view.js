import propTypes from 'prop-types';
import React from 'react';

import Wizard from '../../layouts/Wizard';
import { useFormikForm } from '../../providers/FormikProvider';

import City from './components/City';
import Complement from './components/Complement';
import Neighborhood from './components/Neighborhood';
import Number from './components/Number';
import State from './components/State';
import Street from './components/Street';
import ZipCode from './components/ZipCode';

const OnboardAddressView = ({
  searchAddress, loading, loadingButton,
}) => {
  const form = useFormikForm();

  return (
    <Wizard
      form={form}
      loading={loading}
      loadingButton={loadingButton}
      steps={[{
        fields: ['zipCode'],
        withoutBackButton: true,
        component: <ZipCode searchAddress={searchAddress} />,
      },
      {
        fields: ['street'],
        component: <Street />,
      },
      {
        fields: ['number'],
        component: <Number />,
      },
      {
        fields: ['complement'],
        component: <Complement />,
      },
      {
        fields: ['neighborhood'],
        component: <Neighborhood />,
      },
      {
        fields: ['city'],
        component: <City />,
      },
      {
        fields: ['stateInitials', 'stateName'],
        component: <State />,
      }]}
    />
  );
};

OnboardAddressView.propTypes = {
  searchAddress: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  loadingButton: propTypes.bool.isRequired,
};

export default OnboardAddressView;

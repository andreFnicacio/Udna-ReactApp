import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { listCategorysCustomized } from '../../graphql/queriesCustomized';
import { mapStoreService } from '../../services/storeService';

import StoreView from './store__view';

const StoreContainer = () => {
  const { navigate, state, getParam } = useNavigation();

  const { data: categoriesData, loading: categoriesLoading } = useQuery(listCategorysCustomized);

  const goExamInfo = (exam) => {
    navigate('ExamInfo', { exam });
  };

  const goShopping = () => {
    navigate('Shopping');
  };

  return (
    <>
      {categoriesData && (
      <StoreView
        headerTitle={state.params?.storeTitle || 'Loja'}
        loading={categoriesLoading}
        categories={mapStoreService(categoriesData, state.params?.storeType || 1)}
        onChoiceItem={goExamInfo}
        onSeeShopping={goShopping}
      />
      )}
    </>
  );
};

export default StoreContainer;

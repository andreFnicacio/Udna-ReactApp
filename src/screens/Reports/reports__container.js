import { Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';


import { NUTRITIONAL_PROFILE, PROFESSIONAL_RECOMMENDATIONS, GENETIC_TESTS } from '../../constants/reports';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { mapReportsService } from '../../services/reportsService';

import ReportsView from './reports__view';

export default function ReportsContainer(){
  const { navigate } = useNavigation();
  const { user } = useUser();
  const [selectedType, setSelectedType] = useState(0);
  const [loading, setLoading] = useState(true);
  const username = maskRemoveService(user.cpf);
  let reports = [];
  let list = [];
  const getList = async () => {
    setLoading(true);
    list = Storage.list(`Reports/${username}/Laudos Genéticos`);
    setLoading(false);
  };
  
  console.warn(mapReportsService(list))
  reports = [{
    type: NUTRITIONAL_PROFILE,
    list: mapReportsService(list),
  }];

  console.warn(reports)

  useEffect(() => {
    getList();
  }, []);

  const goToReport = async (report) => {
    setLoading(true);
    try {
      const url = await Storage.get(`Reports/${username}/${reports[0].type}/${report.name}`);
      setLoading(false);
      navigate('ReportInfo', { source: url });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ReportsView
      loading={loading}
      selectedType={selectedType}
      reports={reports}
      onChangeType={setSelectedType}
      onChoiceReport={goToReport}
    />
  );
};
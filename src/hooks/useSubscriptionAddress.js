
import { useQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { getUserCustomized } from '../graphql/queriesCustomized';
import { onUpdateAddressCustomized } from '../graphql/subscriptionsCustomized';
import { useUser } from '../providers/UserProvider';
import { maskRemoveService } from '../services/maskService';

const useSubscriptionAddress = () => {
  const { user } = useUser();

  const { subscribeToMore } = useQuery(getUserCustomized, {
    variables: { id: maskRemoveService(user.cpf) },
  });

  useEffect(() => {
    const unsubscribeAddress = subscribeToMore({
      document: onUpdateAddressCustomized,
      variables: { owner: maskRemoveService(user.cpf) },
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev.getUser,
        address: subscriptionData.data.onCreateAddress,
      }),
    });

    return unsubscribeAddress;
  }, []);
};

export { useSubscriptionAddress };

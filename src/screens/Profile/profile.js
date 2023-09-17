import { useQuery } from '@apollo/react-hooks';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Button from '../../components/Button';
import { getUserCustomized } from '../../graphql/queriesCustomized';
import { useSubscriptionAddress } from '../../hooks/useSubscriptionAddress';
import Container from '../../layouts/Container';
import { useUser } from '../../providers/UserProvider';
import { maskRemoveService } from '../../services/maskService';
import { SignOutService, mapUserService } from '../../services/userService';


import ProfileItem from './components/ProfileItem';
import ProfileTitle from './components/ProfileTitle';
import styles from './styles';


const Profile = () => {
  const { navigate } = useNavigation();
  const { user } = useUser();
  const [mappedUser, setMappedUser] = useState({});

  const { data: userData, loading: userLoading } = useQuery(getUserCustomized, {
    variables: { id: maskRemoveService(user.cpf) },
  });

  useSubscriptionAddress();

  useEffect(() => {
    if (userData && !userLoading) {
      setMappedUser(mapUserService(userData?.getUser));
    }
  }, [userData, userLoading]);

  const onEditData = (type) => {
    switch (type) {
      case 'user':
        navigate('EditUser');
        break;

      case 'address':
        navigate('EditAddress');
        break;


      default:
        break;
    }
  };

  const onSignOut = async () => {
    const [errorSignOut] = await SignOutService();

    if (errorSignOut) {
      console.log(errorSignOut.toString());
    } else {
      navigate('Auth');
    }
  };

  return (
    <>
      {(userData && !userLoading) && (
      <Container
        headerTitle="Perfil"
        loading={userLoading}
        headerTextButton="Fale conosco"
        onPressBack={true}
      >
        <View style={styles.container}>
          <View style={styles.topView}>
            <ProfileTitle text="Dados pessoais" onPress={() => onEditData('user')} />
            <ProfileItem keyItem="CPF" valueItem={mappedUser?.cpf || '--'} style={styles.item} />
            <ProfileItem keyItem="Nome" valueItem={mappedUser?.name || '--'} style={styles.item} />
            <ProfileItem keyItem="Email" valueItem={mappedUser?.email || '--'} style={styles.item} />
            <ProfileItem keyItem="Celular" valueItem={mappedUser?.cellphone || '--'} style={styles.item} />
            <ProfileTitle text="Dados de endereço" onPress={() => onEditData('address')} style={styles.title} />
            <ProfileItem
              keyItem="Endereço"
              valueItem={mappedUser.address
                ? `${mappedUser.address?.zipCode}, 
                     ${mappedUser.address?.street}, 
                     ${mappedUser.address?.number}, 
                     ${mappedUser.address?.complement}, 
                     ${mappedUser.address?.neighborhood}, 
                     ${mappedUser.address?.city}, 
                     ${mappedUser.address?.stateInitials}`
                : '--'}
              style={styles.item}
            />
          </View>
          <Button text="Sair" color="red" onPress={onSignOut} style={styles.button} />
        </View>
      </Container>
      )}
    </>
  );
};

export default Profile;

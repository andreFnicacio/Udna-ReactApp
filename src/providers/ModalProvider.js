/* eslint-disable no-use-before-define */
/* eslint-disable react-native/no-unused-styles */
import propTypes from 'prop-types';
import React, {
  createContext, useContext, useState, useMemo,
} from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import colors from '../styles/colors';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const modalRender = (modalChildren) => {
    setModal(modalChildren);
  };

  const showModal = () => {
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  const defaultContext = useMemo(() => ({
    modalRender,
    showModal,
    hideModal,
  }), [modalRender, showModal, hideModal]);

  return (
    <ModalContext.Provider value={defaultContext}>
      <Modal isVisible={isVisible}>
        <View style={styles.container}>
          {modal}
        </View>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

ModalProvider.propTypes = {
  children: propTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 20,
    width: '90%',
  },
});

export { ModalProvider, useModal };

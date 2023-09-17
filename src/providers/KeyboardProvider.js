import propTypes from "prop-types";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { Animated, Keyboard, Platform } from "react-native";
// import { useAnimation } from 'react-native-animation-hooks';

const KeyboardContext = createContext();

const KeyboardProvider = ({ children }) => {
  const [translate] = useState(new Animated.Value(0));
  const [keyboardHeight] = useState(new Animated.Value(0));

  const handleKeyboardShow = (event) => {
    translate.setValue(0);
    Animated.spring(translate, {
      toValue: 0 - event.endCoordinates.height,
      friction: 13,
      tension: 20,
      useNativeDriver: false,
    }).start();

    Animated.spring(keyboardHeight, {
      toValue: event.endCoordinates.height,
      friction: 13,
      tension: 20,
      useNativeDriver: false,
    }).start();
  };

  const handleKeyboardHide = (event) => {
    translate.setValue(0 - event.endCoordinates.height);
    Animated.spring(translate, {
      toValue: 0,
      friction: 13,
      tension: 20,
      useNativeDriver: false,
    }).start();

    Animated.spring(keyboardHeight, {
      toValue: 0,
      friction: 13,
      tension: 20,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    let eventShow = "";
    let eventHide = "";

    if (Platform.OS === "android") {
      eventShow = "keyboardDidShow";
      eventHide = "keyboardDidHide";
    } else {
      eventShow = "keyboardWillShow";
      eventHide = "keyboardWillHide";
    }

    const keyboardShow = Keyboard.addListener(eventShow, handleKeyboardShow);
    const keyboardHide = Keyboard.addListener(eventHide, handleKeyboardHide);

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  const defaultContext = useMemo(
    () => ({
      translate,
      keyboardHeight,
    }),
    [translate, keyboardHeight]
  );

  return (
    <KeyboardContext.Provider value={defaultContext}>
      {children}
    </KeyboardContext.Provider>
  );
};

const useKeyboardAnimation = () => useContext(KeyboardContext);

KeyboardProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { KeyboardProvider, useKeyboardAnimation };

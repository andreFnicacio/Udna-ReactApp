# udna-app-react
uDNA app main repository

## Setup your environment 

https://react-native.rocketseat.dev/

## Installation

```sh
  npm install
  cd ios && pod install && cd ..
```

## Local developement

### Start the app

```sh
  # RN start
  npm run start

  # Run on iOs simulator
  npm run ios

  # Run on Android emulator
  npm run android
```

## GitFlow

https://docs.google.com/presentation/d/1Ngb77xi64QJLaw8xK84NgC0zz-y5-WhNLx46pfGct_k/edit?usp=sharing

## Storybook

To ensure all components behavior are been filled out, we are using Storybook. You can run ``yarn ios-storybook`` for IOS or ``yarn android-storybook`` for ANDROID and that all by itself, this will change the App for the Storybook Navigator.

### How to create a Story:

Each file story should and must be declared inside the root folder of the component and with his name (eg:. ```MyComponent.stories.tsx```)

### How to see my Story in the navigator:

Once you create a brand new story, you need to run ```yarn storybook``` (Is not needed to keep this command ongoing, is just important to run so the storyLoader is loaded). Once the ```storyLoader.js``` is loaded, you'll be able to see your story in the Storybook Navigator.


## Icons
https://oblador.github.io/react-native-vector-icons/

## Debugger

[Reactotron](https://github.com/infinitered/reactotron)

Configuração Reactotron Android:
adb reverse tcp:9090 tcp:9090
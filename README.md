# udna-app-react
Repositório principal do aplicativo uDNA

## Configurando seu ambiente

https://react-native.rocketseat.dev/

## Instalação

```sh
npm install
cd ios && pod install && cd ..
```

## Desenvolvimento Local

### Iniciar o aplicativo

```sh
# Iniciar o React Native
npm run start

# Executar no simulador iOS
npm run ios

# Executar no emulador Android
npm run android
```

## GitFlow

https://docs.google.com/presentation/d/1Ngb77xi64QJLaw8xK84NgC0zz-y5-WhNLx46pfGct_k/edit?usp=sharing

## Storybook

Para garantir que todos os comportamentos dos componentes estejam preenchidos, estamos usando o Storybook. Você pode executar ``yarn ios-storybook`` para o iOS ou ``yarn android-storybook`` para o ANDROID, e isso por si só mudará o aplicativo para o navegador do Storybook.

### Como criar uma história:

Cada arquivo de história deve e deve ser declarado na pasta raiz do componente e com o nome dele (por exemplo:. ``MyComponent.stories.tsx``)

### Como ver minha história no navegador:

Depois de criar uma nova história, você precisa executar ``yarn storybook`` (não é necessário manter esse comando em andamento, é apenas importante executá-lo para que o carregador de histórias seja carregado). Depois que o arquivo ``storyLoader.js`` for carregado, você poderá ver sua história no navegador do Storybook.

## Ícones
https://oblador.github.io/react-native-vector-icons/

## Depurador

[Reactotron](https://github.com/infinitered/reactotron)

Configuração do Reactotron para Android:
adb reverse tcp:9090 tcp:9090
```

Se você tiver alguma dúvida adicional ou precisar de mais assistência, por favor, fique à vontade para perguntar!

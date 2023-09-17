import { Auth } from 'aws-amplify';

const SignUpService = async (username, password, body) => {
  try {
    const res = await Auth.signUp({ username, password, attributes: body });

    return [null, res];
  } catch (error) {
    return [error, null];
  }
};

const ConfirmSignUpService = async (username, code) => {
  try {
    const res = await Auth.confirmSignUp(username, code);
    return [null, res];
  } catch (error) {
    return [error, null];
  }
};

const ResendSignUp = async (username) => {
  try {
    const res = await Auth.resendSignUp(username);
    return [null, res];
  } catch (error) {
    return [error, null];
  }
};


export {
  SignUpService,
  ConfirmSignUpService,
  ResendSignUp,
};

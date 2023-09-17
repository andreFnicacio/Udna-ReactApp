import * as yup from 'yup';

const cpfValidate = (param) => {
  const value = param.replace(/\D/g, '');
  let Soma;
  let Resto;

  Soma = 0;

  if (
    value === '00000000000'
    || value === '11111111111'
    || value === '22222222222'
    || value === '33333333333'
    || value === '44444444444'
    || value === '55555555555'
    || value === '66666666666'
    || value === '77777777777'
    || value === '88888888888'
    || value === '99999999999'
  ) {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    Soma += Number(value.substring(i - 1, i)) * (11 - i);
  }

  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== Number(value.substring(9, 10))) {
    return false;
  }

  Soma = 0;
  for (let i = 1; i <= 10; i += 1) {
    Soma += Number(value.substring(i - 1, i)) * (12 - i);
  }

  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;

  if (Resto !== Number(value.substring(10, 11))) {
    return false;
  }

  if (!value) {
    return false;
  }

  return true;
};

const validationSchemaAuth = yup.object().shape({
  cpf: yup.string()
    .ensure()
    .required('Digite seu CPF')
    .min(14, 'Seu CPF precisa ter pelo menos 11 caracteres')
    .test('isValid', 'Digite um cpf válido', cpfValidate),
  password: yup.string()
    .ensure(),
});

const validationSchemaForgotPassword = yup.object().shape({
  code: yup.string()
    .ensure()
    .required('Digite o código enviado no email.')
    .length(6, 'O código precisa ter 6 caracteres.'),
  newPassword: yup.string()
    .ensure()
    .required('Digite sua senha')
    .min(6, 'Sua senha precisa ter pelo menos 6 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?“!@#%&/\\,><’:;|_~`+\-=])\S{6,99}$/,
      'Senha inválida',
    ),
  newPasswordConfirmation: yup.string()
    .ensure()
    .required('Digite sua senha')
    .min(6, 'Sua senha precisa ter pelo menos 6 caracteres')
    .oneOf([yup.ref('newPassword'), null], 'Sua senha precisa ser igual à anterior'),
});

export { validationSchemaAuth, validationSchemaForgotPassword };

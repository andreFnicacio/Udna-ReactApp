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

const validationSchemaOnboard = yup.object().shape({
  cpf: yup.string()
    .ensure()
    .required('Digite seu CPF')
    .min(14, 'Seu CPF precisa ter pelo menos 11 caracteres')
    .test('isValid', 'Digite um cpf válido', cpfValidate),
  name: yup.string()
    .ensure()
    .required('Digite seu nome completo')
    .matches(
      /^[A-Za-zÀ-ú'’]{2,}(?: [A-Za-zÀ-ú'’]+){1,20}$/,
      'Digite seu nome completo',
    ),
  email: yup.string()
    .ensure()
    .required('Digite seu email')
    .email('Digite um email válido'),
  emailConfirmation: yup.string()
    .ensure()
    .required('Confirme seu e mail')
    .email('Digite um email válido')
    .oneOf([yup.ref('email'), null], 'O email precisa ser igual ao anterior'),
  password: yup.string()
    .ensure()
    .required('Digite sua senha')
    .min(6, 'Sua senha precisa ter pelo menos 6 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?“!@#%&/\\,><’:;|_~`+\-=])\S{6,99}$/,
      'Senha inválida',
    ),
  passwordConfirmation: yup.string()
    .ensure()
    .required('Digite sua senha')
    .min(6, 'Sua senha precisa ter pelo menos 6 caracteres')
    .oneOf([yup.ref('password'), null], 'Sua senha precisa ser igual à anterior'),
  cellphone: yup.string()
    .ensure()
    .required('Digite seu celular')
    .min(15, 'Seu celular precisa ter pelo menos 11 caracteres'),
});

export { validationSchemaOnboard };

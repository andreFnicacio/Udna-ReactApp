import * as yup from 'yup';

const validationSchemaEditUser = yup.object().shape({
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
  cellphone: yup.string()
    .ensure()
    .required('Digite seu celular')
    .min(15, 'Seu celular precisa ter pelo menos 11 caracteres'),
});

const validationSchemaEditAddress = yup.object().shape({
  zipCode: yup.string()
    .ensure()
    .required('Digite seu Cep'),
  street: yup.string()
    .ensure()
    .required('Digite sua rua'),
  number: yup.string()
    .ensure()
    .required('Digite o número de sua casa ou apartamento'),
  complement: yup.string()
    .ensure(),
  neighborhood: yup.string()
    .ensure()
    .required('Digite seu bairro'),
  city: yup.string()
    .ensure()
    .required('Digite seu bairro'),
  stateInitials: yup.string()
    .ensure()
    .required('Escolha seu estado'),
  stateName: yup.string()
    .ensure()
    .required('Escolha seu estado'),
});

export { validationSchemaEditUser, validationSchemaEditAddress };

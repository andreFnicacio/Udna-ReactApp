import * as yup from 'yup';

const validationSchemaOnboardAddress = yup.object().shape({
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

export { validationSchemaOnboardAddress };

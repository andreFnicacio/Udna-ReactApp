/* eslint-disable no-unused-vars */
import StringMask from 'string-mask';

const format = (value, prevValue, ...props) => {
  const valueClean = value.replace(/\D/g, '');
  if (prevValue !== undefined) {
    if (value.length <= prevValue.length) {
      return prevValue.slice(0, -1);
    }
  }
  const formatter = new StringMask(...props);
  return formatter.apply(valueClean);
};

const masks = {
  cpf: (value, prevValue) => format(value, prevValue, '000.000.000-00'),
  cnpj: (value, prevValue) => format(value, prevValue, '00.000.000/0000-00'),
  cellphone: (value, prevValue) => format(value, prevValue, '(00) 00000-0000'),
  phone: (value, prevValue) => format(value, prevValue, '(00) 0000-0000'),
  zipCode: (value, prevValue) => format(value, prevValue, '00.000-000'),
  money: (value, prevValue) => format(value, prevValue, '#.##0,00', { reverse: true }),
  date: (value, prevValue) => format(value, prevValue, '90/90/9900'),
  bankAccount: (value, prevValue) => format(value, prevValue, '9999999999999990-0'),
};

const maskRemoveService = (data) => data?.replace(/\D/g, '');


export {masks ,maskRemoveService};

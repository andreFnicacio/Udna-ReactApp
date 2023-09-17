import moment from 'moment';

import { PAYMENTS, STATUS } from '../constants/shopping';

import { masks } from './maskService';

const mapShoppingService = (shoppingData) => shoppingData.getExams.map((elt) => {
  const res = {
    id: elt.id,
    examId: elt.examId,
    name: elt.name,
    price: masks.money(elt.price),
    payment: PAYMENTS[elt.payment],
    status: {
      ...STATUS[elt.status],
    },
    date: moment(elt.date).format('DD/MM/YYYY'),
  };

  if (elt.payment !== 'boleto') {
    res.installments = elt.installments;
  }
  return res;
});


export { mapShoppingService };
import { buyExamBilletCustomized, buyExamCreditCardCustomized } from '../graphql/mutationsCustomized';

import { maskRemoveService } from './maskService';
import { discountService } from './moneyService';
import { Mutation } from './udnaAPIService';

const getPrice = (card, exam) => {
  if (card.installments === 1) {
    return exam.price;
  }else{
    return ((exam.price*((0.02*card.installments)+1)));
  }
};

const buyExamBilletService = async (user, exam) => {
  const userInfo = {
    cpf: maskRemoveService(user.cpf),
    name: user.name,
    email: user.email,
    cellphone: maskRemoveService(user.cellphone),
  };
  const addressInfo = {
    street: user.address.street,
    complement: user.address.complement,
    number: user.address.number,
    neighborhood: user.address.neighborhood,
    city: user.address.city,
    stateInitials: user.address.stateInitials,
    zipCode: maskRemoveService(user.address.zipCode),
  };
  const examInfo = {
    id: exam.id,
    title: exam.title,
    price: exam.price,
  };

  const [error, res] = await Mutation(buyExamBilletCustomized, {
    user: userInfo,
    address: addressInfo,
    exam: examInfo,
  });
  if (error) {
    return [error, null];
  }
  return [null, res];
};

const buyExamCreditCardService = async (user, exam, card) => {
  const userInfo = {
    cpf: maskRemoveService(user.cpf),
    name: user.name,
    email: user.email,
    cellphone: maskRemoveService(user.cellphone),
  };
  const addressInfo = {
    street: user.address.street,
    complement: user.address.complement,
    number: user.address.number,
    neighborhood: user.address.neighborhood,
    city: user.address.city,
    stateInitials: user.address.stateInitials,
    zipCode: maskRemoveService(user.address.zipCode),
  };
  const examInfo = {
    id: exam.id,
    title: exam.title,
    price: getPrice(card, exam),
  };
  const cardInfo = {
    number: card.number,
    cvc: card.cvc,
    expiry: maskRemoveService(card.expiry),
    name: card.name,
    installments: card.installments,
  };
  const [error, res] = await Mutation(buyExamCreditCardCustomized, {
    user: userInfo,
    address: addressInfo,
    exam: examInfo,
    card: cardInfo,
  });
  console.log(res);
  console.log(error);
  if (error) {
    return [error, null];
  }
  return [null, res];
};

const sortItems = (a, b) => {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
};

const mapStoreService = (storeData) => storeData.listCategorys.items.map((category) => ({
  id: category.id,
  name: category.name,
  exams: category.exams.items.map((exam) => ({
    id: exam.id,
    categoryId: exam.categoryId,
    title: exam.title,
    subtitle: exam.subtitle,
    description: exam.description,
    price: exam.price,
    icon: exam.url,
  }))
    .sort(sortItems),
})).sort(sortItems);

export { buyExamBilletService, buyExamCreditCardService, mapStoreService };

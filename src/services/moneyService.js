import { masks } from './maskService';

// eslint-disable-next-line max-len
const discountService = (money, discount) => masks.money((Number(money) * discount).toFixed(2).toString());

const moneyMaskService = (money) => masks.money(money.toString());

export { moneyMaskService, discountService };

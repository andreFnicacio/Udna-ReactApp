import colors from '../styles/colors';

const PAYMENTS = {
  boleto: 'Boleto',
  credit_card: 'Cartão de crédito',
};

const STATUS = {
  waiting_payment: {
    text: 'Esperando pagamento',
    color: colors.blue1,
  },
  paid: {
    text: 'Pago',
    color: colors.green2,
  },
  refused: {
    text: 'Recusado',
    color: colors.red1,
  },
  processing: {
    text: 'Processando',
    color: colors.blue1,
  },
  authorized: {
    text: 'Autorizado',
    color: colors.green1,
  },
  refunded: {
    text: 'Extornado',
    color: colors.yellow,
  },
  pending_refund: {
    text: 'Extorno pendente',
    color: colors.blue1,
  },
};

export { PAYMENTS, STATUS };
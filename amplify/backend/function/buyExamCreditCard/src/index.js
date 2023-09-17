/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authUdnabackendbe02c040UserPoolId = process.env.AUTH_UDNABACKENDBE02C040_USERPOOLID
var apiUdnaBackendGraphQLAPIIdOutput = process.env.API_UDNABACKEND_GRAPHQLAPIIDOUTPUT
var apiUdnaBackendGraphQLAPIEndpointOutput = process.env.API_UDNABACKEND_GRAPHQLAPIENDPOINTOUTPUT
var functionBuyExamBilletName = process.env.FUNCTION_BUYEXAMBILLET_NAME
Amplify Params - DO NOT EDIT */

const {
  pagarmeAPI,
  PAGARME_API_KEY_DEV,
  PAGARME_API_KEY_PRD,
} = require("./pagarmeClient");

exports.handler = async (event) => {
  const { user, address, exam, card } = event.arguments;
  const body = {
    amount: Number(exam.price),
    payment_method: "credit_card",
    card_number: card.number,
    card_cvv: card.cvc,
    card_expiration_date: card.expiry,
    card_holder_name: card.name,
    installments: card.installments,
    customer: {
      external_id: user.cpf,
      name: user.name,
      email: user.email,
      country: "br",
      type: "individual",
      document_number: user.cpf,
      phone_numbers: [`+55${user.cellphone}`],
    },
    billing: {
      name: user.name,
      address: {
        street: address.street,
        complementary: address.complement,
        street_number: address.number,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.stateInitials,
        zipcode: address.zipCode,
        country: "br",
      },
    },
    shipping: {
      name: user.name,
      fee: 100,
      expedited: true,
      address: {
        street: address.street,
        complementary: address.complement,
        street_number: address.number,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.stateInitials,
        zipcode: address.zipCode,
        country: "br",
      },
    },
    items: [
      {
        id: exam.id,
        title: exam.title,
        unit_price: Number(exam.price),
        quantity: 1,
        tangible: true,
      },
    ],
  };
  try {
    const res = await pagarmeAPI.post("/transactions", {
      ...body,
      api_key:
        process.env.ENV === "dev" ? PAGARME_API_KEY_DEV : PAGARME_API_KEY_PRD,
    });
    console.tron.log(res);
    console.tron.log(body);
    return "Sucesso na compra por cartão de crédito";
  } catch (error) {
    return error.toString();
  }
};

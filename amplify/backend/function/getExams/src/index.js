/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authUdnabackendbe02c040UserPoolId = process.env.AUTH_UDNABACKENDBE02C040_USERPOOLID
var apiUdnaBackendGraphQLAPIIdOutput = process.env.API_UDNABACKEND_GRAPHQLAPIIDOUTPUT
var apiUdnaBackendGraphQLAPIEndpointOutput = process.env.API_UDNABACKEND_GRAPHQLAPIENDPOINTOUTPUT
Amplify Params - DO NOT EDIT */

const { pagarmeAPI, PAGARME_API_KEY_DEV, PAGARME_API_KEY_PRD } = require('./pagarmeClient');

exports.handler = async (event) => {
  const PAGARME_API_KEY = process.env.ENV === 'dev' ? PAGARME_API_KEY_DEV : PAGARME_API_KEY_PRD;
  try {
    const res = await pagarmeAPI.get(`/transactions?count=1000&customer[external_id]=${event.arguments.username}&api_key=${PAGARME_API_KEY}`);
    console.warn(event.arguments.username)
    return res.data.map((elt) => ({
      id: elt.id,
      examId: elt.items[0].id,
      name: elt.items[0].title,
      price: elt.items[0].unit_price,
      payment: elt.payment_method,
      installments: Number(elt.installments),
      status: elt.status,
      date: elt.date_created,
    }));
  } catch (error) {
    console.warn(error);
    return [];
  }
};
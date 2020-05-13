// import core
const middy = require("@middy/core");
// import some middlewares
const jsonBodyParser = require("@middy/http-json-body-parser");
const httpErrorHandler = require("@middy/http-error-handler");

const processPayment = (event, context, callback) => {
  const {
    creditCardNumber,
    expiryMonth,
    expiryYear,
    cvc,
    nameOnCard,
    amount,
  } = event.body;

  // do stuff with this data
  return callback(null, {
    result: "success",
    message: "payment processed correctly",
  });
};

// Let's "middyfy" our handler, then we will be able to attach middlewares to it
const handler = middy(processPayment)
  .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
  .use(httpErrorHandler()); // handles common http errors and returns proper responses

module.exports = { handler };

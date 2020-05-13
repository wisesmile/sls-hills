const middy = require("@middy/core");
const jsonBodyParser = require("@middy/http-json-body-parser");
const httpErrorHandler = require("@middy/http-error-handler");
const validator = require("@middy/validator");

const businessLogic = (event, context, callback) => {
  const { name } = event.body;
  console.log("name", name);
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      result: "success",
      message: `Hi ${name} ⊂◉‿◉つ`,
    }),
  });
};

const inputSchema = {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"], // Insert here all required event properties
    },
  },
};

// Let's "middyfy" our handler, then we will be able to attach middlewares to it
const handler = middy(businessLogic)
  .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
  .use(httpErrorHandler()); // handles common http errors and returns proper responses

module.exports = { handler };

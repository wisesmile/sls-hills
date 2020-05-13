"use strict";

const { adder } = require("./utils");

module.exports.calc = async (event, context) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let i = event.income;
  console.log(`income passed in ==> ${i}`);

  // execute the adder function
  let c = adder(i + 1000);

  // create an object to hold all the values
  var obj = {
    name: event.name,
    zipCode: event.zip,
    income: event.income,
    incomeAdder: c,
  };

  return {
    statusCode: 200,
    body: JSON.stringify({ message: obj }),
  };
};

"use strict";

const headers = {
  "Access-Control-Allow-Origin": "*", // Required for CORS support to work
  "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
};

module.exports.message = async (event) => {
  var income = 0;
  var debts = 0;

  if (event.body) {
    event = JSON.parse(event.body);
  }

  if (event.income) {
    income = String(event.income);
  }

  if (event.debts) {
    debts = String(event.debts);
  }

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Private EndPoint requires x-api-key",
        income: income,
        debts: debts,
      },
      null,
      2
    ),
  };
};

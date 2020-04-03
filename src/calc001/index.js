"use strict";

module.exports.handler = (event, context, callback) => {
  var dat = {
    name: "Joe",
    zipCode: "02214",
    income: 110000,
    maxMonthlyPayment: 1200,
    mortgageTotal: 230000,
    totalPriceHouse: 250000,
    totalInterest: 23000,
  };
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: dat }),
  };
  callback(null, response);
};

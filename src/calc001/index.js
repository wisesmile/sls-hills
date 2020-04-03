"use strict";

var total = 3 + 2;

var dat = {
  name: "Joe Blow",
  zipCode: "02214",
  income: 110000,
  maxMonthlyPayment: 1200,
  mortgageTotal: 230000,
  totalPriceHouse: 250000,
  totalInterest: 23000,
  totalCalc: total,
};

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: dat }),
  };
  callback(null, response);
};

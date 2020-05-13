"use strict";

const { getDadJoke } = require("./utils");

module.exports.handler = (event, context, callback) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let i = event.firstName;
  let v = getDadJoke();

  var responseObject = {
    name: i,
    message: "Hello, World",
    dadJoke: v,
  };

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(responseObject),
  };
};

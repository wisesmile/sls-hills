"use strict";

const { getDadJoke } = require("./utils");

module.exports.handler = async (event, context) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let n = event.name;
  console.log(`param ==> ${n}`);

  let j = getDadJoke();
  console.log(`joke => ${j}`);

  // results object
  var obj = {
    name: event.name,
    name_two: n,
    joke: j,
  };

  return {
    statusCode: 200,
    body: JSON.stringify({ message: obj }),
  };
};

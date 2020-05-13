"use strict";

const { getDadJoke } = require("./utils");

module.exports.calc = async (event, context) => {
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let n = event.name;
  console.log(`param ==> ${n}`);

  // execute the adder function
  let c = getDadJoke();
  console.log(`joke => ${j}`);

  // create an object to hold all the values
  var obj = {
    name: event.name,
    name_two: n,
    joke: c,
  };

  return {
    statusCode: 200,
    body: JSON.stringify({ message: obj }),
  };
};

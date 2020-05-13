"use strict";

const { getDadJoke } = require("./utils");

module.exports.handler = async (event, context) => {
  // step one process event body
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let n = event.name;
  console.log(`name => ${n}`);

  let j = getDadJoke();
  console.log(`joke => ${j}`);

  // results object
  let results = {
    name: n,
    joke: j,
  };

  // meta
  let api_version = 1;
  let api = "jokes";
  let run_date = "2020-05-05";

  let meta = {
    version: api_version,
    name: api,
    date: run_date,
  };

  const headers = {
    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
  };

  return {
    headers,
    body: JSON.stringify({
      meta: meta,
      result: results,
    }),
    statusCode: 200,
  };
};

"use strict";

const { getDadJoke } = require("./helpers/joke");

module.exports.handler = async (event, context) => {
  // step one process event body
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let n = event.name;
  console.log(`name => ${n}`);

  let j = getDadJoke();
  console.log(`local => ${j}`);

  // results object
  let results = {
    name: n,
    local: j,
  };

  // meta
  let api_version = 3;
  let api = "jokes";
  let run_date = "2020-05-13";

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

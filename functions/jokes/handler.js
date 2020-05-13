"use strict";

const { getDadJokeLocal } = require("./helpers/joke");
const { getDadJokeApi } = require("./helpers/jokes");

module.exports.handler = async (event, context) => {
  // step one process event body
  if (event.body) {
    event = JSON.parse(event.body);
  }

  let n = event.name;
  console.log(`name => ${n}`);

  let j = getDadJokeLocal();
  console.log(`local => ${j}`);

  let z = getDadJokeApi();
  console.log(`api => ${z}`);

  // results object
  let results = {
    name: n,
    local: j,
  };

  // meta
  let api_version = 2;
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

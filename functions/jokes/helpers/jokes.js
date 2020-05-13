const fetch = require("node-fetch");

const options = {
  headers: {
    Accept: "application/json",
    "User-Agent: My Library (https://github.com/wisesmile/sls-hills)",
  },
};

const JOKES_API_URL = "https://icanhazdadjoke.com/";

const getDadJokeSecond = () =>
  new Promise((resolve, reject) => {
    fetch(JOKES_API_URL, options)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });

module.exports = {
  getDadJokeSecond,
};

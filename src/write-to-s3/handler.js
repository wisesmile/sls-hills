"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "write-to-s3",
        input: event,
      },
      null,
      2
    ),
  };
};

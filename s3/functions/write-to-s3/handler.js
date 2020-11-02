"use strict";

const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
const s3 = new AWS.S3();

module.exports.save = (event, context, callback) => {
  var content = "This is a sample text file";
  var keyName = "test.txt";
  var params = { Bucket: process.env.BUCKET, Key: keyName, Body: content };

  s3.putObject(params, function (err, data) {
    if (err) console.log(err);
    else console.log("Successfully saved object.");
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "file saved",
      },
      null,
      2
    ),
  };
};

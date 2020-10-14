
const {accessKeyId, secretAccessKey} = require('./config');
var AWS = require("aws-sdk");

let awsConfig = {
    "region": "eu-west-2",
    "endpoint": "http://dynamodb.eu-west-2.amazonaws.com",
    accessKeyId,
    secretAccessKey 
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let getSingleDataByKey = function () {
    var params = {
        TableName: "demo-dynamo",
        Key: {
            "user_id": "1"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::getSingleDataByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::getSingleDataByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


getSingleDataByKey();

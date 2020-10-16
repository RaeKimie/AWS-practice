const AWS = require("aws-sdk");

let awsConfig = {
    "region": "eu-west-2",
    "endpoint": "http://dynamodb.eu-west-2.amazonaws.com",
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let getSingleDataByKey = function () {
    const params = {
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

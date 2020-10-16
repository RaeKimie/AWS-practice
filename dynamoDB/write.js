const AWS = require("aws-sdk");

AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://dynamodb.eu-west-2.amazonaws.com",
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "demo-dynamo";
const user_id = "2";
const first_name = "Paul";


const params = {
    TableName:table,
    Item:{
        user_id,
        first_name,
    }
};
const insertData = function (params) {
    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
}

insertData(params);

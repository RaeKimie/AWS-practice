const AWS = require("aws-sdk");

AWS.config.update({region: "eu-west-2"});

const sqs = new AWS.SQS();

const item = {
    user_id:3,
    first_name:"요",
}
const params = {
    DelaySeconds: 0,
    MessageBody: JSON.stringify(item),
    QueueUrl: 'https://sqs.eu-west-2.amazonaws.com/452366250505/demo-sqs',
};

const sendMessage = function (params) {
    console.log('Sending a message...')
    sqs.sendMessage(params, function(err,data){
        if(err) {
            console.error(`Unable to send message. Error: ${err}`)
        } else  {
            console.log(`Sent message: ${data.MessageId}`)
        }

    })
}

sendMessage(params);
//expected output on success 
// Sent message: ddce86a9-a02c-4e1c-8fd0-819fee6bdca1

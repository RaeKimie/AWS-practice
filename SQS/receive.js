const AWS = require("aws-sdk");

AWS.config.update({region: "eu-west-2"});

const sqs = new AWS.SQS();


const getMessage = function () {
    const urlParams = {
        MaxNumberOfMessages: 10,//optional The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1
        MessageAttributeNames:['All'],//optional
        QueueUrl: 'https://sqs.eu-west-2.amazonaws.com/452366250505/demo-sqs'
    }
    
    console.log('requesting message...')
    sqs.receiveMessage(urlParams, function(err,data){
        if(err) {
            console.error(`Unable to retrieve messages. Error: ${err}`)
        } else  {
            console.log('Received message: ', data)
            console.log(data.Messages)

        }

    })
}

//interesting.. sometimes get this, not the data
// Received message:  {
//     ResponseMetadata: { RequestId: '75b12f6c-a606-5a39-a80b-776f0b1eda1f' }
//   }

//somehow first 3 times when you call this it shows the correct data then shows ResponseMetadata 
//looks like it's related to MaxNumberOfMessages
getMessage();

//expected output on success 
// requesting message...
// Received message: {
//     ResponseMetadata: { RequestId: '33790ea6-ba92-556b-b8a0-56a51d85c9d2' },
//     Messages: [
//       {
//         MessageId: 'f5f0bb46-a16a-457f-814d-2bc305ea1e79',
//         ReceiptHandle: 'AQEBDRkkHY2uZkPgNSheqDAHPVI17OOmRj9XzTGqIiLCI9th5PkviiWcPf9ikaXQS9EV7E1iNVnzosJW388PkcQ3iDYG3ZIyOPFXhCAgwO+inGft7u36YLdFGX+e5qOrf83i84pPLnG409A52em3IXbBdgn1egczKWztqv2xWa1WmQY5Nhy8ejvPfScNfNyG1Eh4wp3bTIkNXI73APJRvDXyWWt86zgbdt3r/FnqYZU5Shw9tQfG7homEWkdkh+Hs9+8srMiiqy8qfNKvZM6JkTPB2AbDcSYwvenob3PhXuyTUP9Rd1NjfXZcCIcaOMd1dZX52mC962y2we6m+3fL8Vx/IngjnkXAeHvrZJqP6LpxZF1rCUsnYJsoK+GaR4hBmmGxaVJCKCBA2XlZyrjo/elEg==',
//         MD5OfBody: 'c81e728d9d4c2f636f067f89cc14862c',
//         Body: '2'
//       }
//     ]
//   }

const AWS = require("aws-sdk");
const {senderEmail, email} = require('../config');
//only verified email can be used here
let awsConfig = {
    "region": "eu-west-2",
};
AWS.config.update(awsConfig);

const ses = new AWS.SES();

const sendEmail = function () {
    const templateData= {userName:'Mr.smith', animal:'cat'}
    const params = {
        Source : senderEmail,
        Destination: {
            "ToAddresses": [email]
        },
        Template: "emailTemplate-Demo",
        TemplateData : JSON.stringify(templateData)
    }

    ses.sendTemplatedEmail(params, function(err, data) {
        if (err) {
            console.log("Unable to send email. Error:", err)
        } else{
            console.log("Successfully sent the email: ", JSON.stringify(data))
        }
    })
}

sendEmail();
//expected output
//Successfully sent the email:  {"ResponseMetadata":{"RequestId":"c3dd8e92-3405-47d9-9f4a-c63412b2a85c"},"MessageId":"010b01757a0929c6-71ab4804-b1e8-4024-a12d-ec43b4569f65-000000"}

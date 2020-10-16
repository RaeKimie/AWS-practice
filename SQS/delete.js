const AWS = require("aws-sdk");

AWS.config.update({region: "eu-west-2"});

const sqs = new AWS.SQS();

const deleteSQSMessages = function() {
    const receiptHandleParam = {
        QueueUrl: 'https://sqs.eu-west-2.amazonaws.com/452366250505/demo-sqs',
        ReceiptHandle: 'AQEBhFU2lK+3xneTiZD+NOqGGe4TQjZRqTZ4UJGMQSJ+rWJJrccbsKWZcPPU3yx6akQhuYN7yaDfCfyYk0xjcJW8tD9FbR4/mZelsIxWXBm6MvMH0z3SvDcinVehHci6c96YRViFwgG62YSz0YwvNdoDllXXK5WiPUA/lTIY0XCVN2/CuTcZoXVBIqLGp48gN+GJimJZjpGIiKXgGHfq69YdT9X3RHYa/N/5kV1+inpNvOnnpmCb2JTuSTQA1xC7ZSgTHf3E8IP3ZtoYBUsUYTN8BUlHfACtb+BclTEvNEpfbIu2wNVCTGed7wUApUKMsSyrbRdtHWa7wAibP+lE1r8gjLQ0LtYpbENHdLLMLut1NiGWH8SYCx9v+8t271Q3nMADOKa+ZtOv4FRJg60zGAR1rw==',
    } //ReceiptHandle needs to be updated, you can find this from received Message

    sqs.deleteMessage(receiptHandleParam, function (err, data) {
        if(err) {
            console.log('Error: ', err)
        } else {
            console.log('MessageDeleted', data)
        }
    })
}

deleteSQSMessages()

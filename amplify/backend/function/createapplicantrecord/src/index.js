
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk');

// Initialize CognitoIdentityServiceProvider.
const cognito = new aws.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
});

const processResponse = require('./process-response.js');

const USERPOOLID = "us-east-1_xQzsPKX8i";

exports.handler = async (event, context) => {
 
    if (event.httpMethod === 'OPTIONS') {
        return processResponse(true);
    }

    if (!event.body) {
        return processResponse(true, 'Please specify parameters: email, family_name, given_name, and customer_id', 400);
    }
    const applicantData = JSON.parse(event.body);

    if (!applicantData.email || !applicantData.family_name || !applicantData.given_name || !applicantData.customerID_string) {
        return processResponse(true, 'Please specify parameters: email, family_name, given_name, and customer_id', 400);
    }

    const cognitoParams = {
        UserPoolId: USERPOOLID,
        Username: applicantData.email,
        UserAttributes: [{
            Name: "email",
            Value: applicantData.email,
        },
        {
            Name: "given_name",
            Value: applicantData.given_name,
        },
        {
            Name: "family_name",
            Value: applicantData.family_name,
        },
        {
            Name: "custom:customerID_string",
            Value: applicantData.customerID_string,
        },
        {
            Name: "email_verified",
            Value: "false",
        },
        ],

    };


    try {
        await cognito.adminCreateUser(cognitoParams).promise();
        return processResponse(true);
    } catch (err) {
        console.error(err, err.stack);
        const errorResponse = `Error: Execution update, caused a SES error, please look at your logs.`;
        return processResponse(true, errorResponse, 500);
    }

}
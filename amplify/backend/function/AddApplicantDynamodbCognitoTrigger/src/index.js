/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 var aws = require('aws-sdk');
 var ddb = new aws.DynamoDB();
 
 exports.handler = async (event, context) => {
     
     let date = new Date();
 
     if (event.request.userAttributes.sub) {
 
         let params = {
             Item: {
                 'id': {S: event.request.userAttributes.sub},
                 'customerID': {S: event.request.userAttributes.customerID_string},
                 '__typename': {S: 'Applicant'},
                 'firstName': {S: event.request.userAttributes.given_name},
                 'lastName': {S: event.request.userAttributes.family_name},
                 'name': {S: event.request.userAttributes.name},
                 'email': {S: event.request.userAttributes.email},
                 'status':{S: 'Not Submitted'},
                 'createdAt': {S: date.toISOString()},
                 'updatedAt': {S: date.toISOString()},
             },
             TableName: process.env.APPLICANT_TABLE_NAME
         };
 
         // Call DynamoDB
         try {
             await ddb.putItem(params).promise()
             console.log("Success");
         } catch (err) {
             console.log("Error", err);
         }
 
         console.log("Success: Everything executed correctly");
         context.done(null, event);
 
     }else {
         // Nothing to do, the user's email ID is unknown
         console.log("Error: Nothing was written to DynamoDB");
         context.done(null, event);
     }
 };

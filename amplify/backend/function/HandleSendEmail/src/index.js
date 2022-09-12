/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    SENDER_EMAIL
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 const AWS = require('aws-sdk');
 AWS.config.update({
    region: process.env.REGION
 })

 const SES = new AWS.SES();
 const processResponse = require('./process-response.js');
 const SENDER_EMAIL = process.env.SENDER_EMAIL;
 const UTF8CHARSET = 'UTF-8';

exports.handler = async event => {
 if (event.httpMethod === 'OPTIONS') {
   return processResponse(true);
 }

 if (!event.body) {
   return processResponse(true, 'Please specify email parameters: toEmails, subject, and message ', 400);
 }
 const emailData = JSON.parse(event.body);

 if (!emailData.toEmails || !Array.isArray(emailData.toEmails) || !emailData.templateName || !emailData.templateData) {
   return processResponse(true, 'Please specify email parameters: toEmails, templateName and templateData', 400);
 }

 const destination = {
   ToAddresses: emailData.toEmails
 }

 if (emailData.ccEmails) {
   destination.CcAddresses = emailData.ccEmails;
 }

 const body = { Html: { Charset: UTF8CHARSET, Data: emailData.message } };

 const emailParams = {
   Destination: destination,
   Template: emailData.templateName,
   TemplateData: emailData.templateData,
   Source: SENDER_EMAIL
 };

 if (emailData.replyToEmails && Array.isArray(emailData.replyToEmails)) {
   emailParams.ReplyToAddresses = emailData.replyToEmails;
 }

 console.log(emailParams);
 try {
   await SES.sendTemplatedEmail(emailParams).promise();
   return processResponse(true);
 } catch (err) {
   console.error(err, err.stack);
   const errorResponse = `Error: Execution update, caused a SES error, please look at your logs.`;
   return processResponse(true, errorResponse, 500);
 }
};
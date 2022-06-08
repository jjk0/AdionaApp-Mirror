/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

/* 
General info: 
-----------------------------------------------
This UserInfo function is tied to a post-confirmation trigger 
See Cognito>User Pools>General Settings>Triggers to see change this trigger/see other types 
Trigger sends Cognito data as a JSON to this lambda function 
Lambda function sends data to this DynamoDB: UserInfo-br2b5wrmx5ckblvpsfxnte2dju-dev

To confirm it works:
-----------------------------------------------
  1. Sign up for a new account on the mobile app. 
  2. Go to UserInfo-br2b5wrmx5ckblvpsfxnte2dju-dev (via AmplifyStudio>Content or DynamoDB in AWS console)
  3. You should see your new account in the DynamoDB table 

To update/modify lambda function:
-----------------------------------------------
  1. Search for "Lambda" in AWS console or go to Functions>UserInfoFunction from Amplify Studio
  2. Assuming no changes to the incoming data (i.e. info from auth is same):
      a. Under the code tab, modify function as needed 
      b. Select dropdown from "Test" button and choose testCognitoUser 
      c. Click "Deploy" then "Test"
  3. If changing incoming data: 
      a. Select dropdown from "Test" button and configure new test event with appropriate data 
      b. Select dropdown from "Test" button and choose testCognitoUser 
      c. Click "Deploy" then "Test"
  4. Alternatively, can work locally by using Amplify Pull 
      a. run: amplify mock function <functionName> 
  5. Make sure you modify permissions via inline permissions if requesting access to other resources than dynamoDB 
*/ 

const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB()

exports.handler = async (event, context) => {
    let date = new Date()
    if (event.request.userAttributes.sub) {
        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'UserInfo'},
                'username': {S: event.userName},
                'email': {S: event.request.userAttributes.email},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: process.env.USERTABLE
        }

        try {
            await ddb.putItem(params).promise()
            console.log("Success")
        } catch (err) {
            console.log("Error", err)
        }

        console.log("Success: Everything executed correctly")
        context.done(null, event)

    } else {
        console.log("Error: Nothing was written to DynamoDB")
        context.done(null, event)
    }
};

// const params1 = {
//   TableName : 'Users-dev',
//   /* Item properties will depend on your application concerns */
//   Key: {
//     "email": 'joshiejkim@gmail.com',
//   }
// }

// const params2 = {
//     TableName : 'Users-dev',
//     /* Item properties will depend on your application concerns */
//     Item: {
//        email: "joshuakim@uchicago.edu",
//        name: "Josh 2.0",
//        relationship_to_patient: "son",
//        _version: 1,
//        _deleted: false,
//        _lastChangedAt: ""
//     }
//   }

// async function getItem(){
//   try {
//     const data = await docClient.get(params1).promise()
//     return data
//   } catch (err) {
//     return err
//   }
// }

// async function createItem(){
//   try {
//     await docClient.put(params2).promise();
//   } catch (err) {
//     return err;
//   }
// }

// exports.handler = async (event, context) => {
//     try {
//         console.log(`EVENT: ${JSON.stringify(event)}`);
//         await createItem()
//         console.log('Successfully created item!')
//         const data = await getItem()
//         return { 
//             statusCode: 200,
//             body: JSON.stringify(data) 
//         };
//       } catch (err) {
//         return { error: err }
//       }
// };




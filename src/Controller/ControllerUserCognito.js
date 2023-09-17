import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export function SignIn(){
    let awsConfig2 = {
      "region": "us-east-1",
      "accessKeyId": "AKIA564XY3QK6GKEQWUS", "secretAccessKey": "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",
    };

    AWS.config.update(awsConfig2);

    var params = {
      TableName: "User-3tn77dv2gbag7ibwijizdpc7sa-prd",
      FilterExpression: "id = :this_category",
      ExpressionAttributeValues: { ":this_category": "14939349705" },
    };

    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.scan(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
          console.log(data.Items[0]);
      }
    });
  }
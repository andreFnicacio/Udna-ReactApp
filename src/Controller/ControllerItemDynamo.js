import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export let aux = {};

export function callToData(){
    let awsConfig2 = {
      "region": "us-east-1",
      "accessKeyId": "AKIA564XY3QK6GKEQWUS", "secretAccessKey": "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",
    };

    AWS.config.update(awsConfig2);

    var params = {
      TableName: "SubExam-esVix2021marc-dev",
      FilterExpression: "verify = :this_category",
      ExpressionAttributeValues: { ":this_category": "1" },
    };

    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.scan(params, function (err, data) {
      if (err) {
        console.log(err);
      } else {
          aux = [
              {
              title : data.Items[0].title,
              price: data.Items[0].price,
              subtitle: data.Items[0].subtitle
            },
            {
                title : data.Items[1].title,
                price: data.Items[1].price,
                subtitle: data.Items[1].subtitle
            },
            {
                title : data.Items[2].title,
                price: data.Items[2].price,
                subtitle: data.Items[2].subtitle
            },
            {
                title : data.Items[3].title,
                price: data.Items[3].price,
                subtitle: data.Items[3].subtitles
              },
        ]
          return(aux)
      }
    });
  }

  

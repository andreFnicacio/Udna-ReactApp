
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import Amplify, { Auth } from 'aws-amplify';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

import awsconfig from '../aws/awsExports.js';

Amplify.configure(awsconfig);

const graphqlUrl = awsconfig.aws_appsync_graphqlEndpoint;
const region = awsconfig.aws_appsync_region;

const auth = {
  type: awsconfig.aws_appsync_authenticationType,
  jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
};

const httpLink = createHttpLink({ uri: graphqlUrl });

const link = ApolloLink.from([
  createAuthLink({ graphqlUrl, region, auth }),
  createSubscriptionHandshakeLink(graphqlUrl, httpLink),
]);

const udnaAPI = new ApolloClient({
  uri: graphqlUrl,
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const Query = async (query, args) => {
  try {
    const res = await udnaAPI.query({ query, variables: args });
    return [null, res];
  } catch (error) {
    return [error, null];
  }
};

const Mutation = async (mutation, args) => {
  try {
    const res = await udnaAPI.mutate({ mutation, variables: args });
    return [null, res];
  } catch (error) {
    return [error, null];
  }
};

export { udnaAPI, Query, Mutation };

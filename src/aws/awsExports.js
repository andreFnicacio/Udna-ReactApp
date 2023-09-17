import { ENVIRONMENT } from 'react-native-dotenv';

const awsmobileDEV = {
	aws_project_region: 'us-east-1',
	aws_cognito_identity_pool_id:
		'us-east-1:f98550f9-2e0b-4241-8645-9bbdaddb6491',
	aws_cognito_region: 'us-east-1',
	aws_user_pools_id: 'us-east-1_HYs9h6EkX',
	aws_user_pools_web_client_id: '3fttrfb93skdto4d1k3qb1efnf',
	oauth: {},
	aws_appsync_graphqlEndpoint:
		'https://dxpnisqkynhjnbkh6pqww6rsze.appsync-api.us-east-1.amazonaws.com/graphql',
	aws_appsync_region: 'us-east-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
	aws_cloud_logic_custom: [
		{
			name: 'AdminQueries',
			endpoint: 'https://rrl7pvx3w2.execute-api.us-east-1.amazonaws.com/dev',
			region: 'us-east-1',
		},
	],
	aws_user_files_s3_bucket: 'udnas3dev-dev',
	aws_user_files_s3_bucket_region: 'us-east-1',
};

const awsmobilePRD = {
	aws_project_region: 'us-east-1',
	aws_cognito_identity_pool_id:
		'us-east-1:73edf8dc-12ee-4b7f-aa9f-10207b2d9a21',
	aws_cognito_region: 'us-east-1',
	aws_user_pools_id: 'us-east-1_vG7F1qnOM',
	aws_user_pools_web_client_id: '4o2lknetb5bnl8uocu1304edoo',
	oauth: {},
	aws_appsync_graphqlEndpoint:
		'https://2sqfkbscznbzzadb2fusoq6jj4.appsync-api.us-east-1.amazonaws.com/graphql',
	aws_appsync_region: 'us-east-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
	aws_cloud_logic_custom: [
		{
			name: 'AdminQueries',
			endpoint: 'https://1u81d8ilm5.execute-api.us-east-1.amazonaws.com/prd',
			region: 'us-east-1',
		},
	],
	aws_user_files_s3_bucket: 'udnas3prd-prd',
	aws_user_files_s3_bucket_region: 'us-east-1',
};


const awsmobile = ENVIRONMENT === 'DEV' ? awsmobileDEV : awsmobilePRD;


export default awsmobile;

import gql from 'graphql-tag';

export const getUserCustomized = /* GraphQL */ gql`
	query getUserCustomized($id: ID!) {
		getUser(id: $id) {
			id
			name
			email
			cellphone
			cpf
			restoreId
			nutritionalProfile
			address {
				id
				zipCode
				street
				number
				complement
				neighborhood
				city
				stateInitials
				stateName
				owner
			}
			owner
		}
	}
`;

export const listCategorysCustomized = /* GraphQL */ gql`
	query listCategorysCustomized(
		$id: ID
		$filter: ModelCategoryFilterInput
		$limit: Int
		$nextToken: String
		$sortDirection: ModelSortDirection
	) {
		listCategorys(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
			sortDirection: $sortDirection
		) {
			items {
				id
				name
				exams {
					items {
						id
						categoryId
						title
						subtitle
						description
						price
						url
					}
				}
			}
		}
	}
`;

export const getExamsCustomized = /* GraphQL */ gql`
	query getExamsCustomized($username: String) {
		getExams(username: $username) {
			id
			examId
			name
			price
			payment
			installments
			status
			date
		}
	}
`;

export const listKitsCustomized = /* GraphQL */ gql`
	query listKitsCustomized(
		$filter: ModelKitFilterInput
		$limit: Int
		$nextToken: String
	) {
		listKits(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				categoryId
				examId
				owner
				status
			}
		}
	}
`;

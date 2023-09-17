/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExams = /* GraphQL */ `
  query GetExams($username: String) {
    getExams(username: $username) {
      id
      examId
      title
      price
      status {
        text
        color
      }
      date
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      cellphone
      cpf
      restoreId
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
        createdAt
        updatedAt
        owner
      }
      nutritionalProfile
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        cellphone
        cpf
        restoreId
        nutritionalProfile
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      zipCode
      street
      number
      complement
      neighborhood
      city
      stateInitials
      stateName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        zipCode
        street
        number
        complement
        neighborhood
        city
        stateInitials
        stateName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      type
      name
      exams {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
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
        type
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExam = /* GraphQL */ `
  query GetExam($id: ID!) {
    getExam(id: $id) {
      id
      categoryId
      title
      subtitle
      description
      price
      url
      createdAt
      updatedAt
    }
  }
`;
export const listExams = /* GraphQL */ `
  query ListExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryId
        title
        subtitle
        description
        price
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKit = /* GraphQL */ `
  query GetKit($id: ID!) {
    getKit(id: $id) {
      id
      categoryId
      examId
      owner
      status
      createdAt
      updatedAt
    }
  }
`;
export const listKits = /* GraphQL */ `
  query ListKits(
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

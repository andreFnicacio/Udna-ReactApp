import gql from 'graphql-tag';

export const createUserCustomized = /* GraphQL */ gql`
  mutation createUserCustomized(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      cellphone
      cpf
      nutritionalProfile
    }
  }
`;

export const createAddressCustomized = /* GraphQL */ gql`
  mutation createAddressCustomized(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      zipCode
      street
      number
      complement
      neighborhood
      city
      stateInitials
      stateName
    }
  }
`;

export const updateUserCustomized = /* GraphQL */ gql`
  mutation updateUserCustomized(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      }
    }
  }
`;

export const updateAddressCustomized = /* GraphQL */ gql`
  mutation updateAddressCustomized(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      zipCode
      street
      number
      complement
      neighborhood
      city
      stateInitials
      stateName
    }
  }
`;

export const buyExamBilletCustomized = /* GraphQL */ gql`
  mutation buyExamBilletCustomized(
    $user: UserInfo
    $address: AddressInfo
    $exam: ExamInfo
  ) {
    buyExamBillet(user: $user, address: $address, exam: $exam) {
      barCode
      url
    }
  }
`;
export const buyExamCreditCardCustomized = /* GraphQL */ gql`
  mutation buyExamCreditCardCustomized(
    $user: UserInfo
    $address: AddressInfo
    $exam: ExamInfo
    $card: CreditCardInfo
  ) {
    buyExamCreditCard(user: $user, address: $address, exam: $exam, card: $card)
  }
`;

export const updateKitCustomized = /* GraphQL */ gql`
  mutation updateKitCustomized(
    $input: UpdateKitInput!
    $condition: ModelKitConditionInput
  ) {
    updateKit(input: $input, condition: $condition) {
      id
      owner
      status
    }
  }
`;

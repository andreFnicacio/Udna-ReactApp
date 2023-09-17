/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const buyExamBillet = /* GraphQL */ `
  mutation BuyExamBillet(
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
export const buyExamCreditCard = /* GraphQL */ `
  mutation BuyExamCreditCard(
    $user: UserInfo
    $address: AddressInfo
    $exam: ExamInfo
    $card: CreditCardInfo
  ) {
    buyExamCreditCard(user: $user, address: $address, exam: $exam, card: $card)
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createExam = /* GraphQL */ `
  mutation CreateExam(
    $input: CreateExamInput!
    $condition: ModelExamConditionInput
  ) {
    createExam(input: $input, condition: $condition) {
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
export const updateExam = /* GraphQL */ `
  mutation UpdateExam(
    $input: UpdateExamInput!
    $condition: ModelExamConditionInput
  ) {
    updateExam(input: $input, condition: $condition) {
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
export const deleteExam = /* GraphQL */ `
  mutation DeleteExam(
    $input: DeleteExamInput!
    $condition: ModelExamConditionInput
  ) {
    deleteExam(input: $input, condition: $condition) {
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
export const createKit = /* GraphQL */ `
  mutation CreateKit(
    $input: CreateKitInput!
    $condition: ModelKitConditionInput
  ) {
    createKit(input: $input, condition: $condition) {
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
export const updateKit = /* GraphQL */ `
  mutation UpdateKit(
    $input: UpdateKitInput!
    $condition: ModelKitConditionInput
  ) {
    updateKit(input: $input, condition: $condition) {
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
export const deleteKit = /* GraphQL */ `
  mutation DeleteKit(
    $input: DeleteKitInput!
    $condition: ModelKitConditionInput
  ) {
    deleteKit(input: $input, condition: $condition) {
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

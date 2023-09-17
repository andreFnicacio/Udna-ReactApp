/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($owner: String) {
    onCreateAddress(owner: $owner) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($owner: String) {
    onUpdateAddress(owner: $owner) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($owner: String) {
    onDeleteAddress(owner: $owner) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateExam = /* GraphQL */ `
  subscription OnCreateExam {
    onCreateExam {
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
export const onUpdateExam = /* GraphQL */ `
  subscription OnUpdateExam {
    onUpdateExam {
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
export const onDeleteExam = /* GraphQL */ `
  subscription OnDeleteExam {
    onDeleteExam {
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
export const onCreateKit = /* GraphQL */ `
  subscription OnCreateKit {
    onCreateKit {
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
export const onUpdateKit = /* GraphQL */ `
  subscription OnUpdateKit {
    onUpdateKit {
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
export const onDeleteKit = /* GraphQL */ `
  subscription OnDeleteKit {
    onDeleteKit {
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

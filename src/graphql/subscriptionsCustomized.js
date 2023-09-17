import gql from 'graphql-tag';

export const onCreateAddressCustomized = /* GraphQL */ gql`
  subscription onCreateAddressCustomized($owner: String!) {
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
    }
  }
`;

export const onUpdateAddressCustomized = /* GraphQL */ gql`
  subscription onUpdateAddressCustomized($owner: String!) {
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
    }
  }
`;

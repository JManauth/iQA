import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $firstName: String!, $lastName: String!, $userType: String!, $email: String!, $password: String!, $teamLead: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, userType: $userType, email: $email, password: $password, teamLead: $teamLead) {
      token
      user {
        _id
        username
      }
    }
  }
`;
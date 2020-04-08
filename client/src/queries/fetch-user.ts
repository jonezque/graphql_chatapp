import { graphql } from "babel-plugin-relay/macro";

export const fetchUser = graphql`
  query fetchUserQuery($userID: ID!) {
    user(id: $userID) {
      id
      username
    }
  }
`;

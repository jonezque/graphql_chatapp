import { graphql } from "babel-plugin-relay/macro";

export const fetchMe = graphql`
  query fetchMeQuery {
    me {
      id
      username
    }
  }
`;

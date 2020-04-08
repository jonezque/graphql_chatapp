import { graphql } from "babel-plugin-relay/macro";

export const fetchMyChannels = graphql`
  query myChannelsQuery {
    myChannels {
      id
      name
      ownerId
    }
  }
`;

import { graphql } from "babel-plugin-relay/macro";

export const getChannelMessages = graphql`
  query GetChannelMessagesQuery($channelId: ID!) {
    channelMessages(channelId: $channelId) {
      id
      body
      created
      ownerId
      channelId
    }
  }
`;

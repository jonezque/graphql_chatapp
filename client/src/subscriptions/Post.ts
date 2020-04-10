import { graphql } from "babel-plugin-relay/macro";
import { requestSubscription } from "react-relay";
import environment from "../environment";
import { PostSubscriptionResponse, PostSubscriptionVariables } from "./__generated__/PostSubscription.graphql";
import { GraphQLSubscriptionConfig } from "relay-runtime";

const postSubscription = graphql`
  subscription PostSubscription($input: PostInput!) {
    post(input: $input) {
      message {
        id
        body
        ownerId
        channelId
        created
      }
    }
  }
`;

export const subscribeToChannel = (channelId: string) => {
  const variables: PostSubscriptionVariables = {
    input: {
      channelId,
    },
  };

  const subscriptionConfig: GraphQLSubscriptionConfig<PostSubscriptionResponse> = {
    subscription: postSubscription,
    variables,
    updater: (store, data) => {
      const proxy = store.get(data.post.message.id)!;
      const messages = store.getRoot().getLinkedRecords(`channelMessages(channelId:"${channelId}")`) || [];
      messages.push(proxy);
      store.getRoot().setLinkedRecords(messages, `channelMessages(channelId:"${channelId}")`);
    },
  };

  return requestSubscription<PostSubscriptionResponse>(environment, subscriptionConfig);
};

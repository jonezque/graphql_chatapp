import { graphql } from "babel-plugin-relay/macro";
import environment from "../environment";
import { commitMutation } from "react-relay";
import { SendMessageMutation } from "./__generated__/SendMessageMutation.graphql";

const mutation = graphql`
  mutation SendMessageMutation($input: SendMessageInput!) {
    send(input: $input) {
      message {
        id
        ownerId
        channelId
        created
        body
      }
    }
  }
`;

export const sendMessage = (body: string, channelId: string) => {
  const variables = {
    input: {
      body,
      channelId
    },
  };

  commitMutation<SendMessageMutation>(environment, {
    mutation,
    variables,
    onError: (err) => console.log(err),
  });
};

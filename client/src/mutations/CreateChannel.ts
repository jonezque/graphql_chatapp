import { graphql } from "babel-plugin-relay/macro";
import environment from "../environment";
import { commitMutation } from "react-relay";
import { CreateChannelMutation } from "./__generated__/CreateChannelMutation.graphql";

const mutation = graphql`
  mutation CreateChannelMutation($input: CreateChannelInput!) {
    createChannel(input: $input) {
      channel {
        name
        id
        owner {
          id
          username
        }
        ownerId
        users {
          id
          username
        }
      }
    }
  }
`;

export const createChannel = (name: string, callback?: () => void) => {
  const variables = {
    input: {
      name,
    },
  };

  commitMutation<CreateChannelMutation>(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (callback) {
        callback();
      }
    },
    updater: (
      store,
      {
        createChannel: {
          channel: { id, name, ownerId },
        },
      }
    ) => {
      const myChannels = store.getRoot().getLinkedRecords("myChannels") || [];
      const record = store.get(id);
      if (record) {
        store.getRoot().setLinkedRecords([...myChannels, record], "myChannels");
      }
    },
    onError: (err) => console.log(err),
  });
};

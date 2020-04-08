import { graphql } from "babel-plugin-relay/macro";
import environment from "../environment";
import { commitMutation } from "react-relay";
import { ChangeNameMutation } from "./__generated__/ChangeNameMutation.graphql";

const mutation = graphql`
  mutation ChangeNameMutation($input: ChangeNameInput!) {
    changeName(input: $input) {
      user {
        id
        username
      }
    }
  }
`;

export const changeName = (username: string, callback?: () => void) => {
  const variables = {
    input: {
      username,
    },
  };

  commitMutation<ChangeNameMutation>(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (callback) {
        callback();
      }
    },
    onError: (err) => console.log(err),
  });
};

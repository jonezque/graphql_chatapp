import { graphql } from "babel-plugin-relay/macro";
import environment from "../environment";
import { commitMutation } from "react-relay";
import { SignUpMutation } from "./__generated__/SignUpMutation.graphql";

const mutation = graphql`
  mutation SignUpMutation($input: SignupInput!) {
    signup(input: $input) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const signUp = (
  username: string,
  password: string,
  callback?: () => void
) => {
  const variables = {
    input: {
      username,
      password,
    },
  };

  commitMutation<SignUpMutation>(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (errors) {
        localStorage.removeItem("token");
        return;
      }

      localStorage.setItem("token", response.signup.token);
      if (callback) {
        callback();
      }
    },
    onError: (err) => console.log(err),
    updater: (store, { signup: { user } }) => {
      const me = store.getRoot().getOrCreateLinkedRecord("me", "User");
      me.setValue(user.id, "id");
      me.setValue(user.username, "username");
    },
  });
};

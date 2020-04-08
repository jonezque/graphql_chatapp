import { graphql } from "babel-plugin-relay/macro";
import environment from "../environment";
import { commitMutation } from "react-relay";
import { SignInMutation } from "./__generated__/SignInMutation.graphql";

const mutation = graphql`
  mutation SignInMutation($input: SigninInput!) {
    signin(input: $input) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const signIn = (
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

  commitMutation<SignInMutation>(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (errors) {
        localStorage.removeItem("token");
        return;
      }

      localStorage.setItem("token", response.signin.token);
      if (callback) {
        callback();
      }
    },
    onError: (err) => console.log(err),
    updater: (store, { signin: { user } }) => {
      const me = store.getRoot().getOrCreateLinkedRecord("me", "User");
      me.setValue(user.id, "id");
      me.setValue(user.username, "username");
    },
  });
};

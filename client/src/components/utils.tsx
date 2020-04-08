import { commitLocalUpdate } from "react-relay";
import environment from "../environment";
import { User } from '../types';

export const getAuth = ():User | null => {
  let user: User | null  = null;

  commitLocalUpdate(environment, store => {
    const me = store.getRoot().getLinkedRecord("me");
    if (me) {
        user = { id: me.getValue('id') as string, username: me.getValue('username') as string }
    }
  });

  return user;
}


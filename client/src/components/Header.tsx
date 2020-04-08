import React from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import { User } from "../types";
import { commitLocalUpdate } from "react-relay";
import environment from "../environment";

const logout = () => {
  commitLocalUpdate(environment, (store) => {
    store.getRoot().setValue(null, "me");
    localStorage.removeItem('token');
  });
};

export const Header: React.FC<{ user: User | null }> = ({ user = null }) => {
  return (
    <header className="fx-h p-all header">
      <Switch>
        <Route path="/signin">
          <Link to="/signup">sign Up</Link>
        </Route>
        <Route path="/signup">
          <Link to="/signin">sign In</Link>
        </Route>
        <Route path="*">
          {user && (
            <div className="fx-h p-all w100">
              <NavLink exact to="/chat" className="center link" activeClassName="alink">main</NavLink>
              <NavLink to="/chat/create-channel" className="center link" activeClassName="alink">create channel</NavLink>
              <NavLink to="/chat/profile" className="center link" activeClassName="alink">profile</NavLink>
              <div className="spacer"></div>
              <div style={{ marginRight: '1rem' }}>{user.username}</div>
              <button onClick={logout}>logout</button>
            </div>
          )}
        </Route>
      </Switch>
    </header>
  );
};

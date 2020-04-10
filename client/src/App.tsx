import React from "react";
import { User } from "./types";
import { Switch, Route, Redirect } from "react-router";
import { SignIn, SignUp, Header, Main } from "./components";
import { QueryRenderer } from "react-relay";
import { fetchMeQuery } from "./queries/__generated__/fetchMeQuery.graphql";
import environment from "./environment";
import { fetchMe } from "./queries";

const Render = (user: User | null) => (
  <>
    <Header user={user} />
    <Switch>
      <Route exact path="/">
        <Redirect to={"/chat"} />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/chat">
        {user ? <Main user={user} /> : <Redirect to="/signin" />}
      </Route>
      <Route path="*">
        <Redirect to={"/chat"} />
      </Route>
    </Switch>
  </>
);

const App = () => (
  <QueryRenderer<fetchMeQuery>
    environment={environment}
    query={fetchMe}
    variables={{}}
    render={({ error, props }) => {
      if (!props) {
      return <div>Loading...{JSON.stringify(props)}</div>;
      }
      console.log(props)
      return (
        <div
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          {Render(props.me)}
        </div>
      );
    }}
  />
);

export default App;

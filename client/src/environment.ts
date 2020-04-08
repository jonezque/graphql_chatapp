import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";
import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from "subscriptions-transport-ws";

const http = 'http://localhost:4000/graphql';
const ws = 'ws://localhost:4001/graphql';

const setupFetch: FetchFunction = async (operation, variables) => {
  const headers: Headers = new Headers([
    ["Accept", "application/json"],
    ["Content-Type", "application/json"],
  ]);
  if (localStorage.getItem("token")) {
    headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
  }
  const response = await fetch(http, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return response.json();
};
 
const subscriptionClient = new SubscriptionClient(ws, {
  reconnect: true,
  connectionParams: { token: localStorage.getItem("token") }
});


const subscriptionLink = new WebSocketLink(subscriptionClient);

const setupSubscription: any = (operation: any, variables: any) =>
  execute(subscriptionLink, {
    query: operation.text,
    variables,
  });

const environment = new Environment({
  network: Network.create(setupFetch, setupSubscription),
  store: new Store(new RecordSource()),
});

export default environment;

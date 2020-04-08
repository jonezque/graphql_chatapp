/* tslint:disable */
/* eslint-disable */
/* @relayHash 63171b0c1e3e46e07f55640537e68090 */

import { ConcreteRequest } from "relay-runtime";
export type fetchUserQueryVariables = {
    userID: string;
};
export type fetchUserQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly username: string;
    } | null;
};
export type fetchUserQuery = {
    readonly response: fetchUserQueryResponse;
    readonly variables: fetchUserQueryVariables;
};



/*
query fetchUserQuery(
  $userID: ID!
) {
  user(id: $userID) {
    id
    username
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userID",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "userID"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "fetchUserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "fetchUserQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "fetchUserQuery",
    "id": null,
    "text": "query fetchUserQuery(\n  $userID: ID!\n) {\n  user(id: $userID) {\n    id\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '20cdfb6b9198ddf00d70e51e9c925191';
export default node;

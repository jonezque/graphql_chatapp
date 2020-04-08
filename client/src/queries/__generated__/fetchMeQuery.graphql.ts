/* tslint:disable */
/* eslint-disable */
/* @relayHash 07fc0cdaa71c7d697e36fae74fcf73eb */

import { ConcreteRequest } from "relay-runtime";
export type fetchMeQueryVariables = {};
export type fetchMeQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly username: string;
    } | null;
};
export type fetchMeQuery = {
    readonly response: fetchMeQueryResponse;
    readonly variables: fetchMeQueryVariables;
};



/*
query fetchMeQuery {
  me {
    id
    username
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
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
    "name": "fetchMeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "fetchMeQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "fetchMeQuery",
    "id": null,
    "text": "query fetchMeQuery {\n  me {\n    id\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9a4aafc8524a1aee1fa6827a466c4299';
export default node;

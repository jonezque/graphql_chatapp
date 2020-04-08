/* tslint:disable */
/* eslint-disable */
/* @relayHash 8a55e0997f0573de684d9d1154e62125 */

import { ConcreteRequest } from "relay-runtime";
export type myChannelsQueryVariables = {};
export type myChannelsQueryResponse = {
    readonly myChannels: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly ownerId: string;
    } | null>;
};
export type myChannelsQuery = {
    readonly response: myChannelsQueryResponse;
    readonly variables: myChannelsQueryVariables;
};



/*
query myChannelsQuery {
  myChannels {
    id
    name
    ownerId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "myChannels",
    "storageKey": null,
    "args": null,
    "concreteType": "Channel",
    "plural": true,
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
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ownerId",
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
    "name": "myChannelsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "myChannelsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "myChannelsQuery",
    "id": null,
    "text": "query myChannelsQuery {\n  myChannels {\n    id\n    name\n    ownerId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1b3c0595478c104ce03c7fbaadc8ddc7';
export default node;

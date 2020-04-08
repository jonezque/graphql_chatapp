/* tslint:disable */
/* eslint-disable */
/* @relayHash 5041802fb193bc2911841e96cc91d910 */

import { ConcreteRequest } from "relay-runtime";
export type CreateChannelInput = {
    name: string;
};
export type CreateChannelMutationVariables = {
    input: CreateChannelInput;
};
export type CreateChannelMutationResponse = {
    readonly createChannel: {
        readonly channel: {
            readonly name: string;
            readonly id: string;
            readonly owner: {
                readonly id: string;
                readonly username: string;
            };
            readonly ownerId: string;
            readonly users: ReadonlyArray<{
                readonly id: string;
                readonly username: string;
            } | null> | null;
        };
    };
};
export type CreateChannelMutation = {
    readonly response: CreateChannelMutationResponse;
    readonly variables: CreateChannelMutationVariables;
};



/*
mutation CreateChannelMutation(
  $input: CreateChannelInput!
) {
  createChannel(input: $input) {
    channel {
      name
      id
      owner {
        id
        username
      }
      ownerId
      users {
        id
        username
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateChannelInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "username",
    "args": null,
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createChannel",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateChannelPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "channel",
        "storageKey": null,
        "args": null,
        "concreteType": "Channel",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "owner",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "ownerId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "users",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": (v2/*: any*/)
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateChannelMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateChannelMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateChannelMutation",
    "id": null,
    "text": "mutation CreateChannelMutation(\n  $input: CreateChannelInput!\n) {\n  createChannel(input: $input) {\n    channel {\n      name\n      id\n      owner {\n        id\n        username\n      }\n      ownerId\n      users {\n        id\n        username\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e44c9135584966101872ce1f33fcdc60';
export default node;

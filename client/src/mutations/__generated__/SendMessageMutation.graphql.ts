/* tslint:disable */
/* eslint-disable */
/* @relayHash 8e615fa9408d8d65a2ce6437782897d8 */

import { ConcreteRequest } from "relay-runtime";
export type SendMessageInput = {
    body: string;
    channelId: string;
};
export type SendMessageMutationVariables = {
    input: SendMessageInput;
};
export type SendMessageMutationResponse = {
    readonly send: {
        readonly message: {
            readonly id: string;
            readonly ownerId: string;
            readonly channelId: string;
            readonly created: string;
            readonly body: string;
        };
    };
};
export type SendMessageMutation = {
    readonly response: SendMessageMutationResponse;
    readonly variables: SendMessageMutationVariables;
};



/*
mutation SendMessageMutation(
  $input: SendMessageInput!
) {
  send(input: $input) {
    message {
      id
      ownerId
      channelId
      created
      body
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SendMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "send",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SendMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "message",
        "storageKey": null,
        "args": null,
        "concreteType": "Message",
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
            "name": "ownerId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "channelId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "created",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "body",
            "args": null,
            "storageKey": null
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
    "name": "SendMessageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SendMessageMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SendMessageMutation",
    "id": null,
    "text": "mutation SendMessageMutation(\n  $input: SendMessageInput!\n) {\n  send(input: $input) {\n    message {\n      id\n      ownerId\n      channelId\n      created\n      body\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '337378d2c2b78e9c3067a17621bbe5d6';
export default node;

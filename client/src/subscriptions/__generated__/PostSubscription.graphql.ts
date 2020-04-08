/* tslint:disable */
/* eslint-disable */
/* @relayHash f88d897aea6d8587e0406391d9171575 */

import { ConcreteRequest } from "relay-runtime";
export type PostInput = {
    channelId: string;
};
export type PostSubscriptionVariables = {
    input: PostInput;
};
export type PostSubscriptionResponse = {
    readonly post: {
        readonly message: {
            readonly id: string;
            readonly body: string;
            readonly ownerId: string;
            readonly channelId: string;
            readonly created: string;
        };
    };
};
export type PostSubscription = {
    readonly response: PostSubscriptionResponse;
    readonly variables: PostSubscriptionVariables;
};



/*
subscription PostSubscription(
  $input: PostInput!
) {
  post(input: $input) {
    message {
      id
      body
      ownerId
      channelId
      created
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "PostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "post",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PostPayload",
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
            "name": "body",
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
    "name": "PostSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PostSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "PostSubscription",
    "id": null,
    "text": "subscription PostSubscription(\n  $input: PostInput!\n) {\n  post(input: $input) {\n    message {\n      id\n      body\n      ownerId\n      channelId\n      created\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7ce54751a9c05404d2005f2b45283d17';
export default node;

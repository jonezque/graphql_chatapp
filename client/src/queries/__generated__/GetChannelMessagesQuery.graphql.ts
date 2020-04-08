/* tslint:disable */
/* eslint-disable */
/* @relayHash 4f106832ebf14e2fe92c63d54dff8132 */

import { ConcreteRequest } from "relay-runtime";
export type GetChannelMessagesQueryVariables = {
    channelId: string;
};
export type GetChannelMessagesQueryResponse = {
    readonly channelMessages: ReadonlyArray<{
        readonly id: string;
        readonly body: string;
        readonly created: string;
        readonly ownerId: string;
        readonly channelId: string;
    } | null>;
};
export type GetChannelMessagesQuery = {
    readonly response: GetChannelMessagesQueryResponse;
    readonly variables: GetChannelMessagesQueryVariables;
};



/*
query GetChannelMessagesQuery(
  $channelId: ID!
) {
  channelMessages(channelId: $channelId) {
    id
    body
    created
    ownerId
    channelId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "channelId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "channelMessages",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "channelId",
        "variableName": "channelId"
      }
    ],
    "concreteType": "Message",
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
        "name": "body",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GetChannelMessagesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "GetChannelMessagesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "GetChannelMessagesQuery",
    "id": null,
    "text": "query GetChannelMessagesQuery(\n  $channelId: ID!\n) {\n  channelMessages(channelId: $channelId) {\n    id\n    body\n    created\n    ownerId\n    channelId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7a34b7a130da7ee886c82025d01e1c44';
export default node;

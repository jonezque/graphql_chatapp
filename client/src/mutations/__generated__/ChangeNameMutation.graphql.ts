/* tslint:disable */
/* eslint-disable */
/* @relayHash 79c915ad112b26b41c3e86dac38b74f6 */

import { ConcreteRequest } from "relay-runtime";
export type ChangeNameInput = {
    username: string;
};
export type ChangeNameMutationVariables = {
    input: ChangeNameInput;
};
export type ChangeNameMutationResponse = {
    readonly changeName: {
        readonly user: {
            readonly id: string;
            readonly username: string;
        };
    };
};
export type ChangeNameMutation = {
    readonly response: ChangeNameMutationResponse;
    readonly variables: ChangeNameMutationVariables;
};



/*
mutation ChangeNameMutation(
  $input: ChangeNameInput!
) {
  changeName(input: $input) {
    user {
      id
      username
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ChangeNameInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "changeName",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ChangeNamePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
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
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChangeNameMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangeNameMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ChangeNameMutation",
    "id": null,
    "text": "mutation ChangeNameMutation(\n  $input: ChangeNameInput!\n) {\n  changeName(input: $input) {\n    user {\n      id\n      username\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '99800b279eab974d32591c4ceecdfbff';
export default node;

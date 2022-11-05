/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    query ReadAllDevices {\n        device {\n            id\n            name\n            device_type {\n                name\n            }\n        }\n    }\n": types.ReadAllDevicesDocument,
    "\n    query ReadDevice($id: bigint) {\n        device(where: { id: { _eq: $id } }) {\n            id\n            name\n            description\n            device_type {\n                name\n            }\n        }\n    }\n": types.ReadDeviceDocument,
};

export function graphql(source: "\n    query ReadAllDevices {\n        device {\n            id\n            name\n            device_type {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query ReadAllDevices {\n        device {\n            id\n            name\n            device_type {\n                name\n            }\n        }\n    }\n"];
export function graphql(source: "\n    query ReadDevice($id: bigint) {\n        device(where: { id: { _eq: $id } }) {\n            id\n            name\n            description\n            device_type {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query ReadDevice($id: bigint) {\n        device(where: { id: { _eq: $id } }) {\n            id\n            name\n            description\n            device_type {\n                name\n            }\n        }\n    }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
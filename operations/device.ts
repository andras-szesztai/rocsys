import { graphql } from 'gql/gql'

export const getAllDevices = graphql(`
    query ReadAllDevices {
        device {
            id
            name
            device_type {
                name
            }
        }
    }
`)

export const getDevice = graphql(`
    query ReadDevice($id: bigint) {
        device(where: { id: { _eq: $id } }) {
            id
            name
            description
            device_type {
                name
            }
        }
    }
`)

import { gql } from '@apollo/client'

export const READ_ALL_DEVICES = gql`
    query readAllDevices {
        device {
            id
            name
            device_type {
                name
            }
        }
    }
`

export const READ_DEVICE = gql`
    query readDevice($id: ID!) {
        device(id: $id) {
            id
            serial_number
            description
            name
            device_type {
                name
            }
        }
    }
`

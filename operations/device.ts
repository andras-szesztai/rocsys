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

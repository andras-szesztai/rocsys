import { ReadAllDevicesQuery } from 'gql/graphql'

export interface Props {
    devices: ReadAllDevicesQuery['device']
}

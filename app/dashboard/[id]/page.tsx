import { graphqlClient } from 'lib/graphql-client'
import { getDevice } from 'operations/device'

interface PageProps {
    params?: { id?: string }
}

const SelectedRocPage = async ({ params }: PageProps) => {
    const { device } = await graphqlClient.request(getDevice, {
        id: params?.id,
    })
    return (
        <h3 className="text-black text-xl whitespace-nowrap truncate overflow-hidden">
            {device[0].description}
        </h3>
    )
}
export default SelectedRocPage

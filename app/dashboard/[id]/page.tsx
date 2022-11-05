import { graphqlClient } from 'lib/graphql-client'
import { getAllDevices, getDevice } from 'operations/device'

interface PageProps {
    params?: { id?: string }
}

export async function generateStaticParams() {
    const { device: allDevices } = await graphqlClient.request(getAllDevices)
    return allDevices.map((device) => ({
        id: `${device.id}`,
    }))
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

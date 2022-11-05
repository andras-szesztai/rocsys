import { ReactNode } from 'react'

import { DeviceList } from 'components/organisms/DeviceList'
import { graphqlClient } from 'lib/graphql-client'
import { getAllDevices } from 'operations/device'

import 'styles/globals.css'

const Layout = async ({ children }: { children: ReactNode }) => {
    const { device: allDevices } = await graphqlClient.request(getAllDevices)
    return (
        <section className="flex gap-x-6 w-full">
            <div
                style={{ height: '75vh' }}
                className="p-4 border-2 rounded-md overflow-y-auto"
            >
                <DeviceList devices={allDevices} />
            </div>
            {children}{' '}
        </section>
    )
}
export default Layout

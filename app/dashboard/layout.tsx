'use client'

import { Tile } from 'components/molecules/Tile'
import { ReactNode } from 'react'
import { useReadAllDevicesQuery } from 'types/generated/graphql'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const { data, loading, error } = useReadAllDevicesQuery()
    console.log(error)
    return (
        <section className="flex gap-x-6 w-full">
            <div
                style={{ height: '75vh' }}
                className="p-4 border-2 rounded-md overflow-y-auto"
            >
                <ul className="flex flex-col gap-y-2">
                    {loading && 'Loading...'}
                    {data &&
                        data.device.map((device) => (
                            <Tile
                                key={device.id}
                                title={device.name}
                                subtitle={device.device_type.name}
                                href={`/${device.id}`}
                                isActive
                            />
                        ))}
                </ul>
            </div>
            {children}
        </section>
    )
}

export default DashboardLayout

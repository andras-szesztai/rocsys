'use client'

import { Tile } from 'components/molecules/Tile'
import { useSelectedLayoutSegments } from 'next/navigation'

import { Props } from './types'

const DeviceList = ({ devices }: Props) => {
    const segments = useSelectedLayoutSegments()
    console.log(devices, segments[0])

    return (
        <ul className="flex flex-col gap-y-2">
            {devices.map((device) => (
                <Tile
                    key={device.id}
                    title={device.name}
                    subtitle={device.device_type.name}
                    href={`/dashboard/${device.id}`}
                    isActive={device.id === Number(segments[0])}
                />
            ))}
        </ul>
    )
}

export default DeviceList

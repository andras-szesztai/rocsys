import React from 'react'
import { render, screen } from '@testing-library/react'

import DeviceList from './DeviceList'

const activeId = 1

jest.mock('next/navigation', () => ({
    useSelectedLayoutSegments: () => [`${activeId}`],
}))

describe('DeviceList', () => {
    const devices = [
        {
            id: activeId,
            name: 'First',
            device_type: { name: 'First type' },
        },
        {
            id: 2,
            name: 'Second',
            device_type: { name: 'Second type' },
        },
    ]
    it('renders without error', () => {
        render(<DeviceList devices={[]} />)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })

    it('renders the correct number of elements', () => {
        render(<DeviceList devices={devices} />)
        expect(screen.getAllByRole('listitem').length).toBe(devices.length)
    })

    it('sets correct item to be active', () => {
        render(<DeviceList devices={devices} />)
        const items = screen.getAllByRole('listitem')
        expect(items[0].classList.contains('bg-indigo-100')).toBe(true)
        expect(items[0].classList.contains('border-indigo-600')).toBe(true)
        expect(items[0].classList.contains('bg-white')).toBe(false)
        expect(items[1].classList.contains('bg-indigo-100')).toBe(false)
        expect(items[1].classList.contains('border-indigo-600')).toBe(false)
        expect(items[1].classList.contains('bg-white')).toBe(true)
    })
})

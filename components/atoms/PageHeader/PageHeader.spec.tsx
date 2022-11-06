import React from 'react'
import { render, screen } from '@testing-library/react'

import PageHeader from './PageHeader'

let mockReturn: string[] = []
jest.mock('next/navigation', () => ({
    useSelectedLayoutSegments: () => mockReturn,
}))

describe('PageHeader', () => {
    it('renders without error', () => {
        render(<PageHeader />)
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
    it('renders correct text for the route', () => {
        mockReturn = ['dashboard', '1']
        render(<PageHeader />)
        const existingHeaderTitle = screen.getByText('Dashboard')
        expect(existingHeaderTitle).toBeInTheDocument()
        const nonExistingHeaderTitle = screen.queryByText('Settings')
        expect(nonExistingHeaderTitle).not.toBeInTheDocument()
    })
})

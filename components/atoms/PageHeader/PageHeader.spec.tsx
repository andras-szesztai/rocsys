import React from 'react'
import { render, screen } from '@testing-library/react'

import PageHeader from './PageHeader'

jest.mock('next/navigation', () => ({
    useSelectedLayoutSegments: () => ['dashboard', '1'],
}))

describe('PageHeader', () => {
    it('renders without error', () => {
        render(<PageHeader />)
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
    it('renders correct text for the route', () => {
        render(<PageHeader />)
        const existingHeaderTitle = screen.getByText('Dashboard')
        expect(existingHeaderTitle).toBeInTheDocument()
        const nonExistingHeaderTitle = screen.queryByText('Settings')
        expect(nonExistingHeaderTitle).not.toBeInTheDocument()
    })
})

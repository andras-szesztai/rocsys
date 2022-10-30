import React from 'react'
import { render, screen } from '@testing-library/react'

import NavLink from './NavLink'

jest.mock('next/navigation', () => ({
    useSelectedLayoutSegments: () => ['dashboard', '1'],
}))

describe('NavLink', () => {
    it('renders without error', () => {
        render(<NavLink text="Home" href="/" />)
        expect(screen.getByRole('link')).toBeInTheDocument()
    })
    it('renders with correct style when active and inactive', () => {
        render(
            <>
                <NavLink text="Settings" href="/settings" />
                <NavLink text="Dashboard" href="/dashboard" />
            </>
        )
        const inActiveLink = screen.getByText('Settings')
        expect(inActiveLink.classList.contains('bg-gray-900')).toBe(false)
        expect(inActiveLink.classList.contains('bg-transparent')).toBe(true)
        const activeLink = screen.getByText('Dashboard')
        expect(activeLink.classList.contains('bg-gray-900')).toBe(true)
        expect(activeLink.classList.contains('bg-transparent')).toBe(false)
    })
})

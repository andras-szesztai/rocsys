import React from 'react'
import { render, screen } from '@testing-library/react'

import Tile from './Tile'

describe('Tile', () => {
    const props = {
        title: 'Tile title',
        subtitle: 'Tile subtitle',
        href: '/this-tile',
        isActive: false,
    }
    it('renders without error', () => {
        render(<Tile {...props} />)
        expect(screen.getByRole('listitem')).toBeInTheDocument()
    })

    it('renders correct title & subtitle', () => {
        render(<Tile {...props} />)
        const tileTitle = screen.getByText(props.title)
        const subtileTitle = screen.getByText(props.subtitle)
        expect(tileTitle).toBeInTheDocument()
        expect(tileTitle.tagName).toBe('H3')
        expect(subtileTitle).toBeInTheDocument()
        expect(subtileTitle.tagName).toBe('H4')
    })

    it('renders link correct href', () => {
        render(<Tile {...props} />)
        const link = screen.getByText('Details ›')
        expect(link.tagName).toBe('A')
        expect(link).toHaveAttribute('href', props.href)
    })

    it('has correct active & inactive styles', () => {
        const { rerender } = render(<Tile {...props} />)
        const tile = screen.getByRole('listitem')
        expect(tile.classList.contains('bg-indigo-100')).toBe(false)
        expect(tile.classList.contains('border-indigo-600')).toBe(false)
        expect(tile.classList.contains('bg-white')).toBe(true)
        rerender(<Tile {...props} isActive />)
        expect(tile.classList.contains('bg-indigo-100')).toBe(true)
        expect(tile.classList.contains('border-indigo-600')).toBe(true)
        expect(tile.classList.contains('bg-white')).toBe(false)
    })
})

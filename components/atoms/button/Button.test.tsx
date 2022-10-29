import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

import Button from './Button'

describe('Button', () => {
    it('renders without error', () => {
        render(<Button />)
        expect(screen.getByText('Hello Button!')).toBeTruthy()
    })
})

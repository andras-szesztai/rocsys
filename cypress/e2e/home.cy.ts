describe('Home', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('displays button', () => {
        cy.get('h1').contains('Hello, Next.js!')
    })
})

export {}

describe('Navigation', () => {
    it('displays correct navigation elements and page headers', () => {
        cy.visit('/')
        cy.get('a').contains('Home').as('homeButton')
        cy.get('a').contains('Dashboard').as('dashboardButton')
        cy.get('a').contains('Settings').as('settingsButton')
        cy.get('@homeButton').should('be.visible')
        cy.get('@dashboardButton').should('be.visible')
        cy.get('@settingsButton').should('be.visible')
        cy.get('h1').contains('Home')
        cy.get('@dashboardButton').click()
        cy.get('h1').contains('Dashboard')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/dashboard`)
        cy.get('@settingsButton').click()
        cy.get('h1').contains('Settings')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/settings`)
    })
})

export {}

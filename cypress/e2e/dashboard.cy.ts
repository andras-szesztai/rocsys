describe('Dashboard', () => {
    it('displays correct list of devices', () => {
        cy.visit('/dashboard')
        cy.contains('Please select a ROC to see details!').should('be.visible')
        cy.get('li').first().as('firstDevice')
        cy.get('@firstDevice').should('be.visible')
        cy.get('@firstDevice').contains('Details').as('fistDeviceDetailButton')
        cy.get('@fistDeviceDetailButton').should('be.visible')
        cy.get('@fistDeviceDetailButton').click()
        cy.contains('Loading...').should('be.visible')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/dashboard/1`)
        cy.contains('Please select a ROC to see details!').should('not.exist')
    })
})

export {}

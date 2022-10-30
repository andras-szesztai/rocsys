describe('Dashboard', () => {
    beforeEach(() => {
        cy.intercept(
            'POST',
            'https://probable-egret-57.hasura.app/v1/graphql',
            (req) => {
                if (req.body.operationName === 'readAllDevices') {
                    req.reply({ fixture: 'readAllDevices' })
                }
            }
        ).as('graphqlRequest')
        cy.visit('/dashboard')
    })

    it('displays correct list of devices', () => {
        cy.wait('@graphqlRequest')
        cy.contains('Roc One').as('tileOneTitle')
        cy.get('@tileOneTitle').should('be.visible')
        cy.get('@tileOneTitle').parent().parent().as('tileOne')
        cy.get('@tileOne')
            .children()
            .contains('Details')
            .as('tileOneDetailsButton')
        cy.get('@tileOneDetailsButton').should('be.visible')
        cy.get('@tileOneDetailsButton').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/dashboard/1`)
        cy.contains('More info about ROC with id 1').should('be.visible')
    })
})

export {}

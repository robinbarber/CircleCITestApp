describe('Button Click Works', () => {
    it('clicks the button "button1"', () => {
        cy.visit('http://localhost:8080')

        cy.get('#paragraph2').should('be.empty')
        cy.get('#button1').click()
        cy.get('#paragraph2').should('not.be.empty')
        cy.get('#paragraph2').contains('Hello World!')
    })
})

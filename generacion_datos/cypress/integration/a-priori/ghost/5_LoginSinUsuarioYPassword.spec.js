context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    it('5. Inicio de sesión sin información en campos usuario y password', () => {
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario5_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario5_2')

    })


})
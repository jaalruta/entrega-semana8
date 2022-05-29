context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosUnSoloNumero = require("../DataPool/MOCK_DATA_UNNUMERO.json");

    it('7. Intento de login introduciendo usuario y password como un solo numero  ', () => {
        var unSoloNumeroAleatorio = DatosUnSoloNumero[Math.floor(Math.random() * DatosUnSoloNumero.length)];
        cy.get('#ember7').type(unSoloNumeroAleatorio["unnumero"], { force: true })
        cy.get('#ember9').type(unSoloNumeroAleatorio["unnumero"], { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario7_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario7_2')

    })


})
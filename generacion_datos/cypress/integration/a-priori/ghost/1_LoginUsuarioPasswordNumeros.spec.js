context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosNumeros = require("../DataPool/MOCK_DATA_NUMEROS.json");

    it('1. Intento de login introduciendo usuario y password como numeros  ', () => {
        var numeroAleatorio = DatosNumeros[Math.floor(Math.random() * DatosNumeros.length)];
        cy.get('#ember7').type(numeroAleatorio["numero"], { force: true })
        cy.get('#ember9').type(numeroAleatorio["numero"], { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario1_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario1_2')

    })


})
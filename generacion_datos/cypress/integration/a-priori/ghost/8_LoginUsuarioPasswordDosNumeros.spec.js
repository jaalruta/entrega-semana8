context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosDosNumeros = require("../DataPool/MOCK_DATA_DOSNUMEROS.json");

    it('8. Intento de login introduciendo usuario y password como dos numeros cada uno  ', () => {
        var dosNumerosAleatorios = DatosDosNumeros[Math.floor(Math.random() * DatosDosNumeros.length)];
        cy.get('#ember7').type(dosNumerosAleatorios["dosnumeros"], { force: true })
        cy.get('#ember9').type(dosNumerosAleatorios["dosnumeros"], { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario8_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario8_2')

    })


})
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosUnSoloCaracter = require("../DataPool/MOCK_DATA_UNSOLOCARACTER.json");

    it('6. Intento de login introduciendo usuario y password como un solo caracter  ', () => {
        var unSoloCaracterAleatorio = DatosUnSoloCaracter[Math.floor(Math.random() * DatosUnSoloCaracter.length)];
        cy.get('#ember7').type(unSoloCaracterAleatorio["uncaracter"], { force: true })
        cy.get('#ember9').type(unSoloCaracterAleatorio["uncaracter"], { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario6_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario6_2')

    })


})
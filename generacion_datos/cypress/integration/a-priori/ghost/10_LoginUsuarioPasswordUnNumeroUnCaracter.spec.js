context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosUnNumeroUnCaracter = require("../DataPool/MOCK_DATA_UNNUMEROUNCARACTER.json");

    it('9. Intento de login introduciendo usuario y password con un numero y un caractere cada uno  ', () => {
        var unNumeroUnCaracterAleatorios = DatosUnNumeroUnCaracter[Math.floor(Math.random() * DatosUnNumeroUnCaracter.length)];
        cy.get('#ember7').type(unNumeroUnCaracterAleatorios["unnumerouncaracter"], { force: true })
        cy.get('#ember9').type(unNumeroUnCaracterAleatorios["unnumerouncaracter"], { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario10_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario10_2')

    })


})
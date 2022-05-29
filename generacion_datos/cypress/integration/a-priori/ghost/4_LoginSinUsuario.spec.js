context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosCorreo = require("../DataPool/MOCK_DATA_EMAIL.json");
    const DatosClave = require("../DataPool/MOCK_DATA_CLAVES.json");

    it('4. Inicio de sesión sin información en campo usuario', () => {
      var claveAleatorio = DatosClave[Math.floor(Math.random() * DatosClave.length)];
      cy.get('#ember9').type(claveAleatorio["claves"], { force: true })
      cy.get('#ember11').click()
      cy.wait(2000);
      cy.screenshot('Login/Escenario4_1')
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('Please fill out the form to sign in.')
      })
      cy.screenshot('Login/Escenario4_2')

    })


})
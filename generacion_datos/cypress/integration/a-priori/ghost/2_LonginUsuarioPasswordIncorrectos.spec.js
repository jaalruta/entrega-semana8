context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosCorreo = require("../DataPool/MOCK_DATA_EMAIL.json");
    const DatosClave = require("../DataPool/MOCK_DATA_CLAVES.json");

    it('2. Intento de login con usuario y clave invalidas', () => {
      var correoAleatorio = DatosCorreo[Math.floor(Math.random() * DatosCorreo.length)];
      var claveAleatorio = DatosClave[Math.floor(Math.random() * DatosClave.length)];
      cy.get('#ember7').type(correoAleatorio["email"], { force: true })
      cy.get('#ember9').type(claveAleatorio["claves"], { force: true })
      cy.get('#ember11').click()
      cy.wait(2000);
      
      cy.screenshot('Login/Escenario2_1')
      cy.get('p').should(($p) => {
        expect($p.first()).to.contain('There is no user with that email address.')
      })
      cy.screenshot('Login/Escenario2_2')

      
    })

})
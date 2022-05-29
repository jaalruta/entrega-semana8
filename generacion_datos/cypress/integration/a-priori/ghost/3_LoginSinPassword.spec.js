context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')

    })

    const DatosCorreo = require("../DataPool/MOCK_DATA_EMAIL.json");

    it('3. Inicio de sesión sin información en campo password', () => {
        var correoAleatorio = DatosCorreo[Math.floor(Math.random() * DatosCorreo.length)];
        cy.get('#ember7').type(correoAleatorio["email"], { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario3_1')
        cy.get('p').should(($p) => {
            expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario3_2')

    })


})
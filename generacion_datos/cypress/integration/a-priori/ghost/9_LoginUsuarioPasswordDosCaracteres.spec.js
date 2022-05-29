context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      
    })

    const DatosDosCaracteres = require("../DataPool/MOCK_DATA_DOSCARACTERES.json");

    it('9. Intento de login introduciendo usuario y password con dos caracteres cada uno  ', () => {
        var dosCaracteresAleatorios = DatosDosCaracteres[Math.floor(Math.random() * DatosDosCaracteres.length)];
        cy.get('#ember7').type(dosCaracteresAleatorios["doscaracteres"], { force: true })
        cy.get('#ember9').type(dosCaracteresAleatorios["doscaracteres"], { force: true })
        cy.get('#ember11').click()
        cy.wait(2000);
        cy.screenshot('Login/Escenario9_1')
        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
        cy.screenshot('Login/Escenario9_2')

    })


})
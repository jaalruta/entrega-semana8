import {faker} from '@faker-js/faker'
describe ('login', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })
    it ('login', function(){
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(5000);
        cy.get(".gh-nav-body a[href='#/settings/']").click();
        cy.wait(2000);
        cy.get(".view-container a[href='#/settings/general/']").click();
        cy.wait(2000);
        cy.get("body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)").click();
        cy.wait(2000);

        cy.get("div[class='form-group ember-view'] input[type='text']").scrollIntoView().focus().type("{selectall}{backspace}",{force:true});
        cy.get("div[class='description-container form-group ember-view'] input[type='text']").scrollIntoView().focus().type(faker.random.words(5),{force:true});
        cy.get(".view-actions button.gh-btn-primary").click();
        cy.wait(1000);
        cy.get(".gh-btn-red").should("to.exist");

    })
})
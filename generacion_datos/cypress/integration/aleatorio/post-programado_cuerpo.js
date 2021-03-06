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
        cy.wait(2000);
        
        cy.get('.ember-view.gh-secondary-action.gh-nav-new-post').click();
        cy.wait(1000); 
      
        cy.get('.koenig-editor__editor').type(faker.random.words(3));
        cy.wait(2000);
        
        cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').click();
        cy.wait(1000);
        
        cy.get('.gh-date-time-picker').click();
        
        cy.get('.gh-publishmenu-button').click();
        
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
        
        cy.get('.ember-view.gh-editor-back-button').click();
        

    })
})
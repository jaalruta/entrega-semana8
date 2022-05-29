import {faker} from '@faker-js/faker'
describe ('editar', function(){
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(5000)
      })
    it ('editar', function(){
        cy.visit("http://localhost:2368/ghost/#/signin");
        cy.get('#ember7').type(Cypress.config('usuario'));
        cy.get('#ember9').type(Cypress.config('pass'));
        cy.get('#ember11').click();
        cy.wait(2000);
       
        cy.get('.ember-view.gh-secondary-action.gh-nav-new-post').click();
        cy.wait(1000);
        
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').scrollIntoView().focus().type(faker.random.words(3));
        cy.wait(2000);
        
        cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').click();
        
        cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
        cy.wait(1000);
       
        cy.get('.ember-view.gh-editor-back-button').click();
        
        cy.get('.posts-list > :nth-child(2)').click();
        
       
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').scrollIntoView().focus().type( faker.random.words(2));
        cy.wait(2000);
        
        cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').click();
        
        cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        
        cy.get('.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
        
        cy.get('.ember-view.gh-editor-back-button').click();
        
        

    

        
    })
})
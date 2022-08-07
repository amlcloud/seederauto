// <reference types="cypress" />

describe('seeder login Logout functionality tests', () => {
 
  it('Login with username and password', () => {
    cy.visit('/');
    cy.get('flt-semantics-placeholder').first().click({ force: true });
    cy.findByFltSemanticsAriaLabel('log-in Anonymous').click({force:true});
    
  })

}); 
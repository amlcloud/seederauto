

export class LoginPage {

  public clickLoginanonymous() {
    cy.get('flt-semantics-placeholder').first().click({ force: true });
    cy.contains('Please Login');
    cy.findByFltSemanticsAriaLabel('log-in Anonymous').click({ force: true });
    cy.contains('ENTITIES');
  }
  public logOut(){
    cy.contains('ENTITIES');
    cy.findByFltSemanticsAriaLabel('sign out').click({ force: true });
    cy.contains('Please Login');
  }
}

export class CommonPage{

    public locateShadow(){
       return cy.get('flt-glass-pane', { timeout: 30000 }).shadow();
    }
}
export class EntitiesPage{

public clickAddentity(){
cy.findByFltSemanticsAriaLabel('Add Entity').click({force:true});
cy.contains('Adding Entity...');

}

public addEntitydetails(ID:string,Name:string,Description:string){
    cy.get('input[aria-label="ID"]').clear({ force:true }).type(ID, {
        force:true 
    });
    cy.get('input[aria-label="Name"]').clear({ force:true }).type(Name, {
        force:true 
    });
    cy.get('input[aria-label="Description"]').clear({ force:true }).type(Description, {
        force:true 
    });
    cy.findByFltSemanticsAriaLabel('Submit').click({force:true});
    cy.findByFltSemanticsAriaLabel('Mine Only').next('flt-semantics[role="switch"]').click({force:true});
    cy.findByFltSemanticsAriaLabel('Mine Only').next('flt-semantics[role="switch"]').click({force:true});
    cy.contains(Name).click({force:true});
}

public deleteEntity(Name:string){
    cy.contains('ENTITIES').click({force:true});
    cy.get('flt-semantics[aria-label*="'+Name+'"]').find('flt-semantics[role="button"]').click({force:true});
    cy.findByFltSemanticsAriaLabel('OK').click({force:true});
  
}



public addPeriodictemplate(Title:string,MinAmount:string,MaxAmount:string,templateFrequency:string,selectday:string,transactiontype:string){
    cy.findByFltSemanticsAriaLabel('Periodic').click({force:true});
    cy.findByFltSemanticsAriaLabel('Add templates ').click({force:true});
    cy.wait(1000);
    cy.contains('Adding Config...');
    cy.get('input[aria-label="Title"]').clear({ force:true }).type(Title, {
        force:true 
    });
    cy.get('input[aria-label="Min Amount"]').clear({ force:true }).type(MinAmount, {
        force:true 
    });
    cy.get('input[aria-label="Max Amount"]').clear({ force:true }).type(MaxAmount, {
        force:true 
    });
    cy.findByFltSemanticsAriaLabel('Week').click({force:true});
    cy.findByFltSemanticsAriaLabel(templateFrequency).click({force:true});
    cy.get('input[aria-label="Selecy day 1-7"]').clear({ force:true }).type(selectday, {
        force:true 
    });
    cy.findByFltSemanticsAriaLabel(transactiontype).click({force:true});
    cy.findByFltSemanticsAriaLabel('Submit').click({force:true});
}

}
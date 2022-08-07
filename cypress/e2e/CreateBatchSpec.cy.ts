import {LoginPage} from '../pages/LoginPage';
import {BatchesPage} from '../pages/CreateBatchPage';


describe('Create Batch functionality test', () => {
 
    const batchesPage=new BatchesPage();

    it('Login as Anonymous User', () => {
      cy.visit('/');
      cy.get('flt-semantics-placeholder').first().click({ force: true });
      cy.findByFltSemanticsAriaLabel('log-in Anonymous').click({force:true}); 
    })

    it('Add Batch', () => {
        batchesPage.clickOnBatchesTab();
        batchesPage.clickOnAddBatch();
        cy.screenshot();
        batchesPage.enterNewBatchDetailsAndSubmit("102", "TB2", "TB2 Desc");
        cy.wait(1000);
       
        cy.reload();
        cy.wait(1000);
        // batchesPage.clickOnBatchesTab();
        cy.screenshot();

    })
  
  }); 
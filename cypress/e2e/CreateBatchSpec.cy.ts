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
        batchesPage.enterNewBatchDetailsAndSubmit("103", "TB3", "TB3 Desc");
        batchesPage.clickOnBatchesTab();

    })
  
}); 
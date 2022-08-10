import { LoginPage } from "../pages/loginPage";
import {BatchesPage} from '../pages/CreateBatchPage';


describe('Create Batch functionality test', () => {
    const loginPage = new LoginPage();
    const batchesPage=new BatchesPage();

    it('Login anonymous', () => {
      cy.visit('/');
      loginPage.clickLoginanonymous();
  
    })

    it('Add Batch', () => {
        batchesPage.clickOnBatchesTab();
        batchesPage.clickOnAddBatch();
        batchesPage.enterNewBatchDetailsAndSubmit("102", "TB2", "TB2 Desc");
      
     })

     it('logout', () => {
      loginPage.logOut();
  
    })
  
  }); 
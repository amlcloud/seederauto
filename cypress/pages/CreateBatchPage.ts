import { CommonPage } from './CommonPage';

const commonPage = new CommonPage();

export class BatchesPage {

    public clickOnBatchesTab() {
        cy.reload();
        commonPage.locateShadow().contains('BATCHES').click({ force: true });
    }

    public clickOnAddBatch() {
        commonPage.locateShadow().contains('Add Batch').click({ force: true });
    }

    public enterNewBatchDetailsAndSubmit(ID: string,batchName: string,description: string) {

        commonPage.locateShadow().get('input[aria-label="ID"]').clear({ force:true }).type(ID, {
            force:true 
        });
        commonPage.locateShadow().get('input[aria-label="Name"]').clear({ force:true }).type(batchName, {
            force:true 
        });

        commonPage.locateShadow().get('input[aria-label="Description"]').clear({ force:true }).type(description, {
            force:true 
        });

        cy.screenshot();
        commonPage.locateShadow().contains('Submit').click({ force: true });


    }

}
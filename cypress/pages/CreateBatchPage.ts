



export class BatchesPage {

    public clickOnBatchesTab() {
        cy.contains('BATCHES').click({ force: true });
    }

    public clickOnAddBatch() {
        cy.contains('Add Batch').click({ force: true });
    }

    public enterNewBatchDetailsAndSubmit(ID: string, batchName: string, description: string) {

        cy.get('input[aria-label="ID"]').clear({ force: true }).type(ID, {
            force: true
        });
        cy.get('input[aria-label="Name"]').clear({ force: true }).type(batchName, {
            force: true
        });

        cy.get('input[aria-label="Description"]').clear({ force: true }).type(description, {
            force: true
        });
        cy.contains('Submit').click({ force: true });


    }

}
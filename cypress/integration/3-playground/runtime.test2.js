/// <reference types="cypress" />

describe('API Calls', () => {

    it('calls runtime', () => { 

        cy.request({
            method: 'POST',
            url: 'https://gateway.int.compliancesystems.cloud/master/api/gateway/startwithjson', 
            headers: {
              'content-type': 'application/json',
              'partner': 'Misc',
              'operation': 'CallRuntime',
            },
            body: {}
        })
        .then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('body')
            
            cy.log('---> ' + JSON.stringify(response.body.operations[0].messages[0].value))
            cy.visit(response.body.operations[0].messages[0].value);
            // cy.wait(5000); //need a better way to start when page actually loads
            cy.contains('Show All Tabs', {timeout: 20000}).click()
            
            // cy.get('.ui-tabs-anchor')
            // cy.get('.elemMissing')
            // cy.get('.ng-star-inserted')

            cy.get('.elemMissing').click();
            
            /*
            cy.get('.ng-tns-c8-0')
            cy.get('.ng-tns-c8-0').contains('Yes')
            cy.contains('Yes', { timeout: 20000 }).should('be.visible')
            */

            /*
            cy.get('.elemMissing').click(); // HACK: temp one-off to click PaymentCalcs for this use case only
            cy.contains('Yes')
                .should('be.visible')
                .wait(500)
                .click();
            */
        }) 

        
    })

})
/// <reference types="cypress" />

describe('API Calls', () => {

    it('calls the real api', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments')
        .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        })
    })

    it('calls a mock api using a fixture', () => {    

        NOPE!
        
        // cy.intercept('GET', '/fruit', ['apple', 'banana'])
        // cy.intercept('GET', '/comments', {fixture: 'intercept/interceptFixture.json'}).as('comments-fixture')
        cy.intercept({
            method: 'GET',
            url: '/comments',
            headers: { 'content-type': 'application/json'},
            fixture: 'intercept/interceptFixture.json'
          })
        
        
        
        // cy.visit('https://jsonplaceholder.cypress.io/comments') // visit() fails because content type, while request() fails to use intercept
        cy.request('https://jsonplaceholder.cypress.io/comments')



               
    })


})



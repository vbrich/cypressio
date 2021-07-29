/// <reference types="cypress" />

describe('Playground-Tests', () => {
    
    it('empty-test', () => {
    })

    it('throw-error', () => {
    //    throw new Error('error to throw...')
    })

    it('can-play-in-codedamn-site', () => { 
        cy.visit('https://www.codedamn.com')

        cy.contains('Be industry-ready')
        cy.contains('Be industry-ready fullstack coder.').should('exist')

        cy.get('div')
        cy.get('div#root') // same as <div id="root">
        cy.get('div[id=root]')
        cy.get('div#noroot').should('not.exist')
    })

})
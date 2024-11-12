/// <reference types="cypress" />

describe('My first test', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  it.only('check the url', () => {
    cy.get('button').contains('Submit').click();
    cy.get().should('have.css', 'color', '#dc3545');
    // cy.visit('https://example.cypress.io/');
    // cy.get('a[href="/commands/actions"]').contains('type').click(); //contains 'type'
    // cy.url().should('include', '/commands/actions'); //include
    // cy.get('input[placeholder="Email"]').type('test@test.com');
    // cy.get('input[placeholder="Email"]').should('have.value', 'test@test.com');
  });

  it('check the url2', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('a[href="/commands/actions"]').contains('type').click(); //contains 'type'
    cy.url().should('include', '/commands/actions'); //include
    cy.get('input[placeholder="Email"]').type('test@test.com');
    cy.get('input[placeholder="Email"]').should('not.have.value', 'test@test.com');
  });

  it.skip('check the url3', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('a[href="/commands/actions"]').contains('type').click(); //contains 'type'
    cy.url().should('include', '/commands/actions'); //include
    cy.get('input[id="password1"]').type('test');
    cy.get('input[id="password1"]').should('have.css', 'border', 'orange');
  });
});

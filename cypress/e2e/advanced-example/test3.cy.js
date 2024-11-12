/// <reference types="cypress" />
describe('automation exersize', () => {
  it('register user', () => {
    const username = 'name';
    cy.visit('https://www.automationexercise.com/');
    cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)');
    cy.get('.nav a[href="/login"]').click();
    cy.get('.signup-form h2').should('be.visible').should('have.text', 'New User Signup!');
    cy.get('.signup-form input[name="name"]').type(`${username}`);
    cy.get('.signup-form input[name="email"]').type(`email${Date.now()}@gmail.com`);
    cy.get('.signup-form button').click();
    cy.get('.login-form h2:first-child')
      .should('be.visible')
      .should('have.text', 'Enter Account Information');

    cy.get('#id_gender2').click();
    cy.get('#password').type('password');

    cy.get('#days').select('1');
    cy.get('#months').select('1');
    cy.get('#years').select('2000');

    cy.get('#newsletter').check(); //click() тоже проходит

    cy.get('#optin').check();

    cy.get('#first_name').type('Valerii');
    cy.get('#last_name').type('Shev');
    cy.get('#company').type('AAA');
    cy.get('#address1').type('AAA');
    cy.get('#address2').type('AAA');
    cy.get('#country').select('United States');
    cy.get('#state').type('NY');
    cy.get('#state').type('Brooklyn');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('12345');

    cy.get("button[data-qa='create-account']").type('12345');

    cy.get('h2[data-qa="account-created"]')
      .should('be.visible')
      .should('have.text', 'Account Created!');

    cy.get("a[data-qa='continue-button']").click();

    cy.get('navbar-nav li:last-child a')
      .should('be.visible')
      .should('contain', ` Logged in as ${username}`);

    cy.get('navbar-nav li:last-child a b').should('have.css', 'font-weight', 'bold');
  });
});

// describe('automation exersize', () => {
//   it('register user', () => {
//     cy.visit('https://www.automationexercise.com/');
//     cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)');
//     cy.get('.nav a[href="/"]').click();
//     cy.get('.signup-form h2').should('be.visible').should('have.text', 'New User Signup!');
//     cy.get('.signup-form input[name="name"]').type('name');
//     cy.get('.signup-form input[name="email"]').type(`email${Date.now()}@gmail.com`);
//     cy.get('.signup-form button').click();
//     cy.get('.login-form h2:first-child').should('be.visible').should('have.text', 'Enter Account Information');
//   });
// });

import { When, Then, Before, And, Given } from 'cypress-cucumber-preprocessor/steps'

Given('{word} is logged in', (user) => {
    var username = Cypress.env(`${user}_user_name`);
    var password = Cypress.env(`${user}_password`);
    cy.loginWith(username, password);
});

Given('employee tries to log out', () => {
    cy.logout();
})

Then('employee is redirected to the login screen', () => {
    cy.location('pathname').should('eq', '/Account/Login')
})
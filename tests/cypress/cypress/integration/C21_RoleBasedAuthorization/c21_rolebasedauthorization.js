import { When, Then, Before, And, Given } from 'cypress-cucumber-preprocessor/steps'

Given('{word} is logged in', (user) => {
    var username = Cypress.env(`${user}_user_name`);
    var password = Cypress.env(`${user}_password`);
    cy.loginWith(username, password);
});

Given('employee tries to access the company secrets', () => {
    cy.get("#topsecret").click();
})

Then('employee sees the company secrets page', () => {
    cy.location('pathname').should('eq', '/Home/Privacy')
})

Then('employee sees the access denied page', () => {
    cy.location('pathname').should('eq', '/Account/AccessDenied')
})
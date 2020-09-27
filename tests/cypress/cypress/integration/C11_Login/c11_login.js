import { When, Then, Before, And } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
    cy.visit("/");
});

When('employee enters username {word}', (username, password) => {
    cy.get('#username').type(username);
});

And('employee enters password {word}', (password) => {
    cy.get('#password').type(password);
});

And('employee presses login button', () => {
    cy.get('#loginbutton').click();
})

Then('employee proceeds to home page', () => {
    cy.url().should('eq', "https://localhost:5002/");
});

Then('employee sees login failed error message', () => {
    cy.get('.alert').contains("Invalid username or password");
});
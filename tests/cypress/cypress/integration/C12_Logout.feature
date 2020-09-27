Feature: Logout
    After an employee logged in, he/she can logout again

    Background:
        Given admin is logged in

    Scenario: Logout successfully
        Given employee tries to log out
        Then employee is redirected to the login screen
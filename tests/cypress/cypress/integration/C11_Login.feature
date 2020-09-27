Feature: Login
    After an employee enters his/her username and password, he should be redirected to succes screen or failed screen

    Scenario: Login successfully
        Given employee enters username bob
        And employee enters password password
        And employee presses login button
        Then employee proceeds to home page

    Scenario: Login failed
        Given employee enters username bob
        And employee enters password pass
        And employee presses login button
        Then employee sees login failed error message
Feature: Role based authorization
    Scenario: Admin can view company secrets
        Given admin is logged in
        And employee tries to access the company secrets
        Then employee sees the company secrets page

    Scenario: User cannot view company secrets
        Given user is logged in
        And employee tries to access the company secrets
        Then employee sees the access denied page
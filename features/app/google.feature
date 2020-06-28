
Feature: Agent handler


    Scenario Outline: Agent login
        Given I open the <url> and login with <Agent> id
        And navigate to customer page

        Examples:
            | url | Agent  |
            | dev | madhan |
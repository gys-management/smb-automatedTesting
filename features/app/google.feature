
Feature: Agent handler


    Scenario Outline: Agent login
        Given I open the <url> and login with <Agent> id
        And navigate to <details> page with specific <ProCategory>
      

        Examples:
            | url | Agent  |details|ProCategory|
            |  prod| madhan |product|Product Details|

Feature: Agent handler


    # Scenario Outline: Agent login as Customer
    #    Given I open the <url> and login with <Agent> id
    #    And navigate to <details> page
        
    #     Examples:
    #         | url | Agent  |details|
    #         |  prod| madhan |product|

    #  Scenario Outline: Agent login as Product
    #     Given I open the <url> and login with <Agent> id
    #     And navigate to the <details> page
    #     And navigate to the product page with detailed ProCategory
    #     And Search the product by various sections <method>
      
        


    #     Examples:
    #         | url | Agent  |details|method|
    #         |  prod| madhan |Product|Product Type|


    #   Scenario Outline: User to select the darkmode option
    #        Given I open the <url> and login with <Agent> id
    #        And navigate to the <details> page
    #         And user click on the sidebar tool icon
    #        And select the darkmode option
    #        And user want to signout from the application

    #         Examples:
    #         | url | Agent  |details|
    #         |  prod| madhan |Product|

      Scenario Outline: User to select the oders option
           Given I open the <url> and login with <Agent> id
           And navigate to the <details> page
           And user want to check the <status> of the orders
           And user enter the order <num> to search the details
           
            Examples:
            | url | Agent  |details|status|num|
            |  prod| madhan |Orders|Pending|2|


    #    Scenario Outline: User to select the Customer option
    #        Given I open the <url> and login with <Agent> id
    #        And navigate to the <details> page
           
    #         Examples:
    #         | url | Agent  |details|
    #         |  prod| madhan |Customer|

Feature: Agent handler


    Scenario Outline: Agent login as Customer
       Given I open the <url> and login with <Agent> id
       And navigate to the <details> page
       And user click on searchCustomerDetails page and enter the <Customername>
        And user enter the orderNumber <num> to search CustomerDetails
        Then user check for the Order Amount <order_Amt> and <order_Text>
        And user click on the order number link
        Then check the order date detail is there for <orderDate>
        Then check the estimated delivery date is there for <DeliveryDate>
        Then check the total amount field for <Amountfield>
        
          
        
        Examples:
            | url | Agent  |details|Customername|num|orderDate|DeliveryDate|Amountfield|order_Amt|order_Text|
            |  prod| madhan |Customer|Devi|9|2020-07-19|2020-07-21|162|539|Ordered Amt|


     Scenario Outline: Agent login as Product
        Given I open the <url> and login with <Agent> id
        And navigate to the <details> page
        And navigate to the product page with detailed ProCategory
        And Search the product by various sections <method>
      
        


        Examples:
            | url | Agent  |details|method|
            |  prod| madhan |Product|Product Type|


      Scenario Outline: User to select the darkmode option
           Given I open the <url> and login with <Agent> id
           And navigate to the <details> page
            And user click on the sidebar tool icon
           And select the darkmode option
           And user want to signout from the application

            Examples:
            | url | Agent  |details|
            |  prod| madhan |Product|

      Scenario Outline: User to select the oders option
           Given I open the <url> and login with <Agent> id
           And navigate to the <details> page
           And user want to check the <status> of the orders
           And user enter the order <num> to search the details
           And user click on the order number link
           Then check the order date detail is there for <orderDate>
           Then check the estimated delivery date is there for <DeliveryDate>
           Then check the total amount field for <Amountfield>
          #  And I check the <product_name> and <price> for the the list of products
           
            Examples:
            | url | Agent  |details|status|num|orderDate|DeliveryDate|Amountfield|
            |  prod| madhan |Orders|Pending|2|2020-06-19|2020-06-19|26.5|


    


    

Feature: Test the attributes of a given element
    As a developer
    I want to be able to test the attributes of a given element

Scenario Outline: Check title of website after search
    Given I open the <url>
    # When I set "WebdriverIO" to the inputfield "#lst-ib"
    # And I press "Enter"
    # Then I expect that the title is "WebdriverIO - Google Search"

  Examples:
      |url|
      |https://ionic-angular-61cb7.web.app/auth/login|
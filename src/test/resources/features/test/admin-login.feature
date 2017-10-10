Feature: Test login and logout functionality

  @openhim
  Scenario: Login with valid user details.
    Given I add the test case IDs to the shared storage for hiptest reporting
      | project | suite  | section | test-case-id |
      | Openhim | Master | Login   | 440          |
    When I navigate to the openhim landing page
    And I enter username of
      | username         |
      | root@openhie.org |
    And I enter a password of "openhim-password"
    And I click the login button
    Then I am confronted by the openhim-dashboard


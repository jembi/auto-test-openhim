Feature: Test login and logout functionality

  @openhim
  Scenario: Login with valid user details & Add a client
    Given I add the test case IDs to the shared storage for hiptest reporting
      | project | suite  | section | test-case-id |
      | Openhim | Master | Clients | 417          |
    When I navigate to the openhim landing page
    And I enter username of
      | username         |
      | root@openhim.org |
    And I enter a password of "test"
    And I click the login button
    Then I am confronted by the openhim-dashboard
    Then I click on the clients menu
    And and a client name
      | clientID | clientName     | clientOrganisation     | roleName     | authPass | authPassConf |
      | 1        | TestClientName | TestClientOrganisation | testRoleName | 123      | 123          |
    And save the client

#  @openhim
#  Scenario: Login with valid user details & Add a client
#    Given I add the test case IDs to the shared storage for hiptest reporting
#      | project | suite  | section | test-case-id |
#      | Openhim | Master | Clients | 416          |
#    When I navigate to the openhim landing page
#    And I enter username of
#      | username         |
#      | root@openhim.org |
#    And I enter a password of "test"
#    And I click the login button
#    Then I am confronted by the openhim-dashboard
#    Then I click on the clients menu
#    And and a Role name
#    And save the Role
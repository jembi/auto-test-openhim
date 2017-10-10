$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/test/admin-login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login and logout functionality",
  "description": "",
  "id": "test-login-and-logout-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2682898,
  "status": "passed"
});
formatter.before({
  "duration": 3870130888,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid user details.",
  "description": "",
  "id": "test-login-and-logout-functionality;login-with-valid-user-details.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@openhim"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I add the test case IDs to the shared storage for hiptest reporting",
  "rows": [
    {
      "cells": [
        "project",
        "suite",
        "section",
        "test-case-id"
      ],
      "line": 6
    },
    {
      "cells": [
        "Openhim",
        "Master",
        "Login",
        "440"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate to the openhim landing page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter username of",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 10
    },
    {
      "cells": [
        "root@openhie.org"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter a password of \"openhim-password\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am confronted by the openhim-dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 72172035,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 718756291,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 12287651,
  "error_message": "java.lang.NullPointerException\r\n\tat autotests.test.model.common.AdminLoginModel.enterUsername(AdminLoginModel.java:7)\r\n\tat autotests.test.step_definitions.AdminLoginStepDefinitions.i_enter_username_of(AdminLoginStepDefinitions.java:37)\r\n\tat ✽.And I enter username of(features/test/admin-login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "openhim-password",
      "offset": 23
    }
  ],
  "location": "AdminLoginStepDefinitions.i_enter_a_password_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://192.168.0.253:9000/#/login");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1045608173,
  "status": "passed"
});
formatter.after({
  "duration": 41938,
  "status": "passed"
});
formatter.after({
  "duration": 2344082673,
  "status": "passed"
});
formatter.before({
  "duration": 535704,
  "status": "passed"
});
formatter.before({
  "duration": 3183463255,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Logout from the openhim-console",
  "description": "",
  "id": "test-login-and-logout-functionality;logout-from-the-openhim-console",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@openhim"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I add the test case IDs to the shared storage for hiptest reporting",
  "rows": [
    {
      "cells": [
        "project",
        "suite",
        "section",
        "test-case-id"
      ],
      "line": 20
    },
    {
      "cells": [
        "Openhim",
        "Master",
        "Login",
        "455"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I am logged into the openhim console",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be logged out of the console",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 285174,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_logged_into_the_openhim_console()"
});
formatter.result({
  "duration": 48866,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_on_the_logout_button()"
});
formatter.result({
  "duration": 77676,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_should_be_logged_out_of_the_console()"
});
formatter.result({
  "duration": 48137,
  "status": "passed"
});
formatter.after({
  "duration": 558992759,
  "status": "passed"
});
formatter.after({
  "duration": 741096148,
  "status": "passed"
});
formatter.after({
  "duration": 47772,
  "status": "passed"
});
});
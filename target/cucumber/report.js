$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/test/add-clients.feature");
formatter.feature({
  "line": 1,
  "name": "Test login and logout functionality",
  "description": "",
  "id": "test-login-and-logout-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2664657,
  "status": "passed"
});
formatter.before({
  "duration": 3891371939,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid user details \u0026 Add a client",
  "description": "",
  "id": "test-login-and-logout-functionality;login-with-valid-user-details-\u0026-add-a-client",
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
        "Console Testing",
        "Clients",
        "685"
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
        "root@openhim.org"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter a password of \"test\"",
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
formatter.step({
  "line": 15,
  "name": "I click on the clients menu",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 82137574,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 971596810,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 804036333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "AdminLoginStepDefinitions.i_enter_a_password_of(String)"
});
formatter.result({
  "duration": 112144226,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 86022059,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 18755069,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.i_click_on_the_clients_menu()"
});
formatter.result({
  "duration": 77013207,
  "status": "passed"
});
formatter.after({
  "duration": 564579359,
  "status": "passed"
});
formatter.after({
  "duration": 51783,
  "status": "passed"
});
formatter.after({
  "duration": 2680339306,
  "status": "passed"
});
formatter.before({
  "duration": 763258,
  "status": "passed"
});
formatter.before({
  "duration": 3168501695,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login with valid user details \u0026 Add a client",
  "description": "",
  "id": "test-login-and-logout-functionality;login-with-valid-user-details-\u0026-add-a-client",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@openhim"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I add the test case IDs to the shared storage for hiptest reporting",
  "rows": [
    {
      "cells": [
        "project",
        "suite",
        "section",
        "test-case-id"
      ],
      "line": 21
    },
    {
      "cells": [
        "Openhim",
        "Console Testing",
        "Clients",
        "686"
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the openhim landing page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter username of",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 25
    },
    {
      "cells": [
        "root@openhim.org"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter a password of \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I am confronted by the openhim-dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on the clients menu",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "and a client name",
  "rows": [
    {
      "cells": [
        "clientID",
        "clientName",
        "clientOrganisation",
        "roleName",
        "authPass",
        "authPassConf"
      ],
      "line": 32
    },
    {
      "cells": [
        "1",
        "TestClientName",
        "TestClientOrganisation",
        "testRoleName",
        "123",
        "123"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "save the client",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 274962,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 802047778,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 793700441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "AdminLoginStepDefinitions.i_enter_a_password_of(String)"
});
formatter.result({
  "duration": 113378276,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 95972128,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 17059345,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.i_click_on_the_clients_menu()"
});
formatter.result({
  "duration": 74173872,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.and_a_client_name(DataTable)"
});
formatter.result({
  "duration": 2102484801,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.save_the_client()"
});
formatter.result({
  "duration": 132412318,
  "status": "passed"
});
formatter.after({
  "duration": 563482426,
  "status": "passed"
});
formatter.after({
  "duration": 29903,
  "status": "passed"
});
formatter.after({
  "duration": 1074011593,
  "status": "passed"
});
formatter.before({
  "duration": 1579758,
  "status": "passed"
});
formatter.before({
  "duration": 3169622696,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Login with valid user details \u0026 Add a client",
  "description": "",
  "id": "test-login-and-logout-functionality;login-with-valid-user-details-\u0026-add-a-client",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@openhim"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I add the test case IDs to the shared storage for hiptest reporting",
  "rows": [
    {
      "cells": [
        "project",
        "suite",
        "section",
        "test-case-id"
      ],
      "line": 39
    },
    {
      "cells": [
        "Openhim",
        "Console Testing",
        "Clients",
        "688"
      ],
      "line": 40
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I navigate to the openhim landing page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter username of",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 43
    },
    {
      "cells": [
        "root@openhim.org"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter a password of \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I am confronted by the openhim-dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on the clients menu",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click on a client row",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 265117,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 797963454,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 686024902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "AdminLoginStepDefinitions.i_enter_a_password_of(String)"
});
formatter.result({
  "duration": 100395231,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 95145416,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 17965919,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.i_click_on_the_clients_menu()"
});
formatter.result({
  "duration": 78168123,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.click_on_a_client_row()"
});
formatter.result({
  "duration": 16410,
  "status": "passed"
});
formatter.after({
  "duration": 570880887,
  "status": "passed"
});
formatter.after({
  "duration": 14222,
  "status": "passed"
});
formatter.after({
  "duration": 868916910,
  "status": "passed"
});
formatter.uri("features/test/admin-login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login and logout functionality",
  "description": "",
  "id": "test-login-and-logout-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1752248,
  "status": "passed"
});
formatter.before({
  "duration": 3176485089,
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
        "Console Testing",
        "Login",
        "681"
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
        "root@openhim.org"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter a password of \"test\"",
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
  "duration": 71841,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 782557895,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 791028856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "AdminLoginStepDefinitions.i_enter_a_password_of(String)"
});
formatter.result({
  "duration": 121172040,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 98032158,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 16673523,
  "status": "passed"
});
formatter.after({
  "duration": 572439493,
  "status": "passed"
});
formatter.after({
  "duration": 14952,
  "status": "passed"
});
formatter.after({
  "duration": 840895897,
  "status": "passed"
});
formatter.before({
  "duration": 749400,
  "status": "passed"
});
formatter.before({
  "duration": 3190317819,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login with valid user details.",
  "description": "",
  "id": "test-login-and-logout-functionality;login-with-valid-user-details.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@openhim"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I add the test case IDs to the shared storage for hiptest reporting",
  "rows": [
    {
      "cells": [
        "project",
        "suite",
        "section",
        "test-case-id"
      ],
      "line": 21
    },
    {
      "cells": [
        "Openhim",
        "Console Testing",
        "Login",
        "703"
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the openhim landing page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter username of",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 25
    },
    {
      "cells": [
        "root@openhim.org"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter a password of \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I am confronted by the openhim-dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on the profile Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am confronted by the openhim landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 175407,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 782950282,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 796144836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 23
    }
  ],
  "location": "AdminLoginStepDefinitions.i_enter_a_password_of(String)"
});
formatter.result({
  "duration": 111293083,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 81589473,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 15004419,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_on_the_profile_Icon()"
});
formatter.result({
  "duration": 664481553,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.click_on_Logout()"
});
formatter.result({
  "duration": 84472568,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_landing_page()"
});
formatter.result({
  "duration": 41572,
  "status": "passed"
});
formatter.after({
  "duration": 558416406,
  "status": "passed"
});
formatter.after({
  "duration": 44855,
  "status": "passed"
});
formatter.after({
  "duration": 1059378775,
  "status": "passed"
});
});
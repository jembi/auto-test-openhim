$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/test/add-channels.feature");
formatter.feature({
  "line": 1,
  "name": "Test View Add Edit Delete Channel",
  "description": "",
  "id": "test-view-add-edit-delete-channel",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2773329,
  "status": "passed"
});
formatter.before({
  "duration": 3912231893,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "View Channels",
  "description": "",
  "id": "test-view-add-edit-delete-channel;view-channels",
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
        "692"
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
  "name": "I click on the channels menu",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 95714669,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 1010888370,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 807707119,
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
  "duration": 140126220,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 103207944,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 25220335,
  "status": "passed"
});
formatter.match({
  "location": "ChannelStepDefinitions.i_click_on_the_channels_menu()"
});
formatter.result({
  "duration": 84807701,
  "status": "passed"
});
formatter.after({
  "duration": 596653699,
  "status": "passed"
});
formatter.after({
  "duration": 2497737212,
  "status": "passed"
});
formatter.after({
  "duration": 14587,
  "status": "passed"
});
formatter.before({
  "duration": 693971,
  "status": "passed"
});
formatter.before({
  "duration": 3132879098,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Add Channels",
  "description": "",
  "id": "test-view-add-edit-delete-channel;add-channels",
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
        "694"
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
  "name": "I click on the channels menu",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I click on Add Channel",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I add basic info",
  "rows": [
    {
      "cells": [
        "channelName",
        "channelDescription"
      ],
      "line": 33
    },
    {
      "cells": [
        "Test Channel",
        "Test Description"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I add Request Info",
  "rows": [
    {
      "cells": [
        "urlPath",
        "addRequestMatchClient"
      ],
      "line": 36
    },
    {
      "cells": [
        "/test/url",
        "Test"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I add Roue info",
  "rows": [
    {
      "cells": [
        "routName",
        "hostAddress",
        "hostPort"
      ],
      "line": 39
    },
    {
      "cells": [
        "openhim test",
        "test.openhim.org",
        "9000"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I save the channel",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 122529,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 1175832691,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 796194067,
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
  "duration": 142613647,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 106337193,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 22400328,
  "status": "passed"
});
formatter.match({
  "location": "ChannelStepDefinitions.i_click_on_the_channels_menu()"
});
formatter.result({
  "duration": 86558490,
  "status": "passed"
});
formatter.match({
  "location": "ChannelStepDefinitions.i_click_on_Add_Channel()"
});
formatter.result({
  "duration": 625660785,
  "status": "passed"
});
formatter.match({
  "location": "ChannelStepDefinitions.i_add_basic_info(DataTable)"
});
formatter.result({
  "duration": 880728264,
  "status": "passed"
});
formatter.match({
  "location": "ChannelStepDefinitions.i_add_Request_Info(DataTable)"
});
formatter.result({
  "duration": 491447717,
  "status": "passed"
});
formatter.match({
  "location": "ChannelStepDefinitions.i_add_Roue_info(DataTable)"
});
formatter.result({
  "duration": 805411145,
  "status": "passed"
});
formatter.match({
  "location": "ChannelStepDefinitions.i_save_the_channel()"
});
formatter.result({
  "duration": 171797963,
  "status": "passed"
});
formatter.after({
  "duration": 593879641,
  "status": "passed"
});
formatter.after({
  "duration": 962858180,
  "status": "passed"
});
formatter.after({
  "duration": 15681,
  "status": "passed"
});
formatter.uri("features/test/add-clients.feature");
formatter.feature({
  "line": 1,
  "name": "Test login and logout functionality",
  "description": "",
  "id": "test-login-and-logout-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 640729,
  "status": "passed"
});
formatter.before({
  "duration": 3128749555,
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
  "duration": 166655,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 920548962,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 830940357,
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
  "duration": 142180051,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 103911397,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 29984406,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.i_click_on_the_clients_menu()"
});
formatter.result({
  "duration": 87860368,
  "status": "passed"
});
formatter.after({
  "duration": 582281255,
  "status": "passed"
});
formatter.after({
  "duration": 2599162276,
  "status": "passed"
});
formatter.after({
  "duration": 38656,
  "status": "passed"
});
formatter.before({
  "duration": 2741967,
  "status": "passed"
});
formatter.before({
  "duration": 3115209292,
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
  "duration": 162279,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 1199685507,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 817481416,
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
  "duration": 127832770,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 124831157,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 37303733,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.i_click_on_the_clients_menu()"
});
formatter.result({
  "duration": 117738291,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.and_a_client_name(DataTable)"
});
formatter.result({
  "duration": 2291071887,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.save_the_client()"
});
formatter.result({
  "duration": 136327799,
  "status": "passed"
});
formatter.after({
  "duration": 576610974,
  "status": "passed"
});
formatter.after({
  "duration": 991845574,
  "status": "passed"
});
formatter.after({
  "duration": 18963,
  "status": "passed"
});
formatter.before({
  "duration": 565971,
  "status": "passed"
});
formatter.before({
  "duration": 3121499881,
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
formatter.step({
  "line": 50,
  "name": "I edit the Client Details",
  "rows": [
    {
      "cells": [
        "clientName",
        "clientOrganisation",
        "softwareName",
        "Description",
        "Location",
        "contactPerson"
      ],
      "line": 51
    },
    {
      "cells": [
        "edited Name",
        "edited Organisation",
        "QA Test",
        "test description",
        "current location",
        "Jembi QA"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "save the client",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 123988,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 891584907,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 788289806,
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
  "duration": 130212254,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 98879291,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 15729752,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.i_click_on_the_clients_menu()"
});
formatter.result({
  "duration": 81621929,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.click_on_a_client_row()"
});
formatter.result({
  "duration": 629246603,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.i_edit_the_Client_Details(DataTable)"
});
formatter.result({
  "duration": 1334711063,
  "status": "passed"
});
formatter.match({
  "location": "ClientStepDefinitions.save_the_client()"
});
formatter.result({
  "duration": 131777790,
  "status": "passed"
});
formatter.after({
  "duration": 572798330,
  "status": "passed"
});
formatter.after({
  "duration": 888530417,
  "status": "passed"
});
formatter.after({
  "duration": 12763,
  "status": "passed"
});
formatter.uri("features/test/add-users.feature");
formatter.feature({
  "line": 1,
  "name": "Test ability to add, edit and remove users",
  "description": "",
  "id": "test-ability-to-add,-edit-and-remove-users",
  "keyword": "Feature"
});
formatter.before({
  "duration": 863542,
  "status": "passed"
});
formatter.before({
  "duration": 3102546795,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid user details and add a new user",
  "description": "",
  "id": "test-ability-to-add,-edit-and-remove-users;login-with-valid-user-details-and-add-a-new-user",
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
        "Users",
        "806"
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
  "name": "I navigate to the users section",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on Add a new User",
  "keyword": "And "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 129823,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 1051902638,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 698794613,
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
  "duration": 122226672,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 103120423,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 17971754,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinitions.i_navigate_to_the_users_section()"
});
formatter.result({
  "duration": 97635760,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinitions.i_click_on_Add_a_new_User()"
});
formatter.result({
  "duration": 25527,
  "status": "passed"
});
formatter.after({
  "duration": 580689463,
  "status": "passed"
});
formatter.after({
  "duration": 926914673,
  "status": "passed"
});
formatter.after({
  "duration": 29173,
  "status": "passed"
});
formatter.uri("features/test/add-visualizer.feature");
formatter.feature({
  "line": 1,
  "name": "Test View Add Edit Delete Channel",
  "description": "",
  "id": "test-view-add-edit-delete-channel",
  "keyword": "Feature"
});
formatter.before({
  "duration": 686313,
  "status": "passed"
});
formatter.before({
  "duration": 3092780156,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "View Channels",
  "description": "",
  "id": "test-view-add-edit-delete-channel;view-channels",
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
        "Visualizers",
        "698"
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
  "name": "I click on the visualizers menu",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on Add a Visualizer",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I add Visualizer details",
  "rows": [
    {
      "cells": [
        "visualizerName",
        "eventType"
      ],
      "line": 18
    },
    {
      "cells": [
        "Test Visualizer",
        "Test"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I save the Visualizer",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 102473,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 792036080,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 226021738,
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
  "duration": 120392007,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 102914748,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 21506882,
  "status": "passed"
});
formatter.match({
  "location": "VisualizerStepDefinitions.i_click_on_the_visualizers_menu()"
});
formatter.result({
  "duration": 93238548,
  "status": "passed"
});
formatter.match({
  "location": "VisualizerStepDefinitions.i_click_on_Add_a_Visualizer()"
});
formatter.result({
  "duration": 22974,
  "status": "passed"
});
formatter.match({
  "location": "VisualizerStepDefinitions.i_add_Visualizer_details(DataTable)"
});
formatter.result({
  "duration": 43761,
  "status": "passed"
});
formatter.match({
  "location": "VisualizerStepDefinitions.i_save_the_Visualizer()"
});
formatter.result({
  "duration": 22974,
  "status": "passed"
});
formatter.after({
  "duration": 581237200,
  "status": "passed"
});
formatter.after({
  "duration": 818891602,
  "status": "passed"
});
formatter.after({
  "duration": 38655,
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
  "duration": 1646129,
  "status": "passed"
});
formatter.before({
  "duration": 3110034600,
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
  "duration": 107943,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 968370194,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 834130142,
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
  "duration": 136156038,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 116024333,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 25269200,
  "status": "passed"
});
formatter.after({
  "duration": 586306138,
  "status": "passed"
});
formatter.after({
  "duration": 929681438,
  "status": "passed"
});
formatter.after({
  "duration": 13128,
  "status": "passed"
});
formatter.before({
  "duration": 697617,
  "status": "passed"
});
formatter.before({
  "duration": 3128614262,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login with valid user details.",
  "description": "",
  "id": "test-login-and-logout-functionality;login-with-valid-user-details.",
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
        "Console Testing",
        "Login",
        "703"
      ],
      "line": 21
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I navigate to the openhim landing page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter username of",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 24
    },
    {
      "cells": [
        "root@openhim.org"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter a password of \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I am confronted by the openhim-dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on the profile Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "click on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I am confronted by the openhim landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 176866,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 1158798508,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 787751550,
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
  "duration": 143646397,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 110179375,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 22872943,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_on_the_profile_Icon()"
});
formatter.result({
  "duration": 637821129,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.click_on_Logout()"
});
formatter.result({
  "duration": 94391640,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_landing_page()"
});
formatter.result({
  "duration": 29173,
  "status": "passed"
});
formatter.after({
  "duration": 581997905,
  "status": "passed"
});
formatter.after({
  "duration": 1280524485,
  "status": "passed"
});
formatter.after({
  "duration": 16774,
  "status": "passed"
});
});
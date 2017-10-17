$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/test/admin-login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login and logout functionality",
  "description": "",
  "id": "test-login-and-logout-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2670859,
  "status": "passed"
});
formatter.before({
  "duration": 3912476857,
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
  "name": "I click on the profile Icon",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on Logout",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am confronted by the openhim landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable)"
});
formatter.result({
  "duration": 80668035,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_navigate_to_the_openhim_landing_page()"
});
formatter.result({
  "duration": 956628445,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_enter_username_of(DataTable)"
});
formatter.result({
  "duration": 770592034,
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
  "duration": 118984140,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_the_login_button()"
});
formatter.result({
  "duration": 89834800,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_dashboard()"
});
formatter.result({
  "duration": 16158623,
  "status": "passed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_click_on_the_profile_Icon()"
});
formatter.result({
  "duration": 58266589,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DESKTOP-PID14E8\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Jono\\AppData\\Local\\Temp\\scoped_dir1944_4387}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9797157a9a28491b6314eedecd5e8b03\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat autotests.test.model.common.AdminLoginModel.clickProfile(AdminLoginModel.java:35)\r\n\tat autotests.test.step_definitions.AdminLoginStepDefinitions.i_click_on_the_profile_Icon(AdminLoginStepDefinitions.java:69)\r\n\tat ✽.Then I click on the profile Icon(features/test/admin-login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.click_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AdminLoginStepDefinitions.i_am_confronted_by_the_openhim_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://192.168.0.253:9000/#/login");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 901272305,
  "status": "passed"
});
formatter.after({
  "duration": 60900,
  "status": "passed"
});
formatter.after({
  "duration": 2350189939,
  "status": "passed"
});
});
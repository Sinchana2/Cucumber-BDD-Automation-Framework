$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/login_logout.feature");
formatter.feature({
  "line": 1,
  "name": "As a Amazon user I should be able to login and logout with valid credentials",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13618561900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into the application with valid credentials",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;login-into-the-application-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I clear cart items if any",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I choose Electronincs\u003eHeadphones and headphones list out",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I add first availabe headphone to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I search \"Macbook pro\" and add second available item to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I Select cart from home and remove the earlier added headphones",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I Reduce the Quantity of the macbook pro product to one and proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I Click on Sign out",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I got log out from the application and land on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 423921600,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n\tat ✽.Given I am on the Login page URL \"https://www.amazon.in/\"(src/test/resources/features/login/login_logout.feature:4)\r\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @e25b2fe\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_clear_cart_items_if_any()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_choose_Electronincs_Headphones_and_headphones_list_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_add_first_availabe_headphone_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook pro",
      "offset": 10
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_and_add_nd_available_item_to_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Select_cart_from_home_and_remove_the_earlier_added_headphones()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Reduce_the_Quantity_of_the_macbook_pro_product_to_one_and_proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Sign_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_got_log_out_from_the_application_and_land_on_sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 751604101,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"\u003cproducts\u003e\" from the search bar",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;",
  "rows": [
    {
      "cells": [
        "products"
      ],
      "line": 34,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;1"
    },
    {
      "cells": [
        "laptops"
      ],
      "line": 35,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;2"
    },
    {
      "cells": [
        "pendrive"
      ],
      "line": 36,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;3"
    },
    {
      "cells": [
        "led tv"
      ],
      "line": 37,
      "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4841904399,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"laptops\" from the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 802500,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n\tat ✽.Given I am on the Login page URL \"https://www.amazon.in/\"(src/test/resources/features/login/login_logout.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "laptops",
      "offset": 20
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_different_from_the_search_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 771019900,
  "status": "passed"
});
formatter.before({
  "duration": 4867274199,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"pendrive\" from the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1730399,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n\tat ✽.Given I am on the Login page URL \"https://www.amazon.in/\"(src/test/resources/features/login/login_logout.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "pendrive",
      "offset": 20
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_different_from_the_search_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 668661400,
  "status": "passed"
});
formatter.before({
  "duration": 4821578301,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Searching different products after login",
  "description": "",
  "id": "as-a-amazon-user-i-should-be-able-to-login-and-logout-with-valid-credentials;searching-different-products-after-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on the Login page URL \"https://www.amazon.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter username as \"testusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password as \"testpassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I search different \"led tv\" from the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 28
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2436800,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n\tat ✽.Given I am on the Login page URL \"https://www.amazon.in/\"(src/test/resources/features/login/login_logout.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_click_on_sign_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_should_see_Sign_In_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testusername",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_Click_on_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testpassword",
      "offset": 21
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_am_already_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "led tv",
      "offset": 20
    }
  ],
  "location": "loginLogoutPageStepDefinitions.i_search_different_from_the_search_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 703205400,
  "status": "passed"
});
});
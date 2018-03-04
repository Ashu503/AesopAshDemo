$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature_1.feature");
formatter.feature({
  "line": 1,
  "name": "LoginScreen",
  "description": "",
  "id": "loginscreen",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Login screen appears when clicked on Login button",
  "description": "",
  "id": "loginscreen;verify-login-screen-appears-when-clicked-on-login-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Login screen appears",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.main_page()"
});
formatter.result({
  "duration": 14799780523,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.login_button()"
});
formatter.result({
  "duration": 20400866047,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.login_window()"
});
formatter.result({
  "duration": 670131623,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_browser()"
});
formatter.result({
  "duration": 3753894715,
  "status": "passed"
});
formatter.uri("feature_2.feature");
formatter.feature({
  "line": 1,
  "name": "SignUpPage for Unknown Email",
  "description": "",
  "id": "signuppage-for-unknown-email",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate that an unknown email address results in being asked for Title/Firstname/Lastname",
  "description": "",
  "id": "signuppage-for-unknown-email;validate-that-an-unknown-email-address-results-in-being-asked-for-title/firstname/lastname",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter unknown email address",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Screen appears with Title, Firstname and Lastname",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.login_page()"
});
formatter.result({
  "duration": 31314314264,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.email_address()"
});
formatter.result({
  "duration": 257916256,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.signup_window()"
});
formatter.result({
  "duration": 20153370684,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_browser()"
});
formatter.result({
  "duration": 3745952325,
  "status": "passed"
});
formatter.uri("feature_3.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Automate the following sequence of event",
  "description": "",
  "id": "checkout;automate-the-following-sequence-of-event",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open a product category",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Add a product to the cart",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "View the cart and checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter an email address in the checkout process",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.select_product()"
});
formatter.result({
  "duration": 33076203423,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.add_to_card()"
});
formatter.result({
  "duration": 20088136420,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.cart()"
});
formatter.result({
  "duration": 17343795613,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.checkout()"
});
formatter.result({
  "duration": 40243532061,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_browser()"
});
formatter.result({
  "duration": 3745044806,
  "status": "passed"
});
});
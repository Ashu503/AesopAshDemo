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
formatter.match({
  "location": "TestSteps.main_page()"
});
formatter.result({
  "duration": 15228928524,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.login_button()"
});
formatter.result({
  "duration": 337011771,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.login_window()"
});
formatter.result({
  "duration": 676960289,
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
formatter.match({
  "location": "TestSteps.login_page()"
});
formatter.result({
  "duration": 4581856675,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.email_address()"
});
formatter.result({
  "duration": 422168074,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.signup_window()"
});
formatter.result({
  "duration": 732210233,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: missing or invalid \u0027entry.level\u0027\n  (Session info: chrome\u003d64.0.3282.167)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SALUJA-16\u0027, ip: \u0027192.168.0.48\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.27.440174 (e97a722caafc2d..., userDataDir: C:\\Users\\Saluja\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.167, webStorageEnabled: true}\nSession ID: 75eb4ea2038206cbf6683395aa29abdb\n*** Element info: {Using\u003dclass name, value\u003dFormSelect-label}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByClassName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByClassName.findElements(By.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat demo.AesopAshDemo.TestSteps.signup_window(TestSteps.java:107)\r\n\tat ✽.Then Screen appears with Title, Firstname and Lastname(feature_2.feature:6)\r\n",
  "status": "failed"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
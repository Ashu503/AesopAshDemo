package demo.AesopAshDemo;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeTest;
//import org.testng.asserts.Assertion;
import org.testng.asserts.SoftAssert;


import cucumber.api.java.en.*;

//import demo.AesopAshDemo.Variables;


public class TestSteps {

	public static WebDriver driver = new ChromeDriver();
    String baseUrl = "http://www.aesop.com";
    String unknownEmail = "unknown@unknown.com";
    String knownEmail = "ash.saluja.it@gmail.com";
    WebDriverWait wait = new WebDriverWait(driver, 20);

	//private Assertion hardAssert = new Assertion();
	private SoftAssert softAssert = new SoftAssert();
	  
    @Given("^Navigate to home page$")
    public void main_page() throws Throwable {

    	System.out.println("Going to Main Page" );
        driver.get(baseUrl);

    }
    
    @When("^Click on Login button$")
    public void login_button() throws Throwable {

    	System.out.println("Clicking on Login Button" );

    	WebElement login = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@data-test-ref='NAV_LOGIN']/span")));
        String loginText = driver.findElement(By.xpath("//*[@data-test-ref='NAV_LOGIN']/span")).getText();
       
        //JavascriptExecutor jse = (JavascriptExecutor)driver;
        //jse.executeScript("arguments[0].scrollIntoView()", login); 
        
        System.out.println(loginText);
        softAssert.assertEquals (loginText, "Login");

        //softAssert.assertAll();
        login.click();

     }
    
    @Then("^Login screen appears$")
    public void login_window() throws Throwable {
        System.out.println("Checking continue button is available or not" );
                
        String continueButton = wait.until(ExpectedConditions.elementToBeClickable(By.className("Btn-label"))).getText();

        System.out.println(continueButton);
        softAssert.assertEquals (continueButton, "Continue");
        //softAssert.assertAll();
    }
    
    @Given("^Navigate to login page$")
    public void login_page() throws Throwable {
    	main_page();
    	login_button();
    	login_window();
    }    
    
    @When("^Enter unknown email address$")
    public void email_address() throws Throwable {

    	System.out.println("Entering email" );

    	WebElement emailTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.className("FormText-input")));
    	
    	
    	emailTextBox.sendKeys(unknownEmail);
    	driver.findElement(By.className("Btn-label")).click();

     }
    
    
    @Then("^Screen appears with Title, Firstname and Lastname$")
    public void signup_window() throws Throwable {
        System.out.println("Checking new screen is displayed or not" );

        WebElement noUse = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".FormText-input.has-content")));
        		//("FormText-input has-content")));
        System.out.println("6666");
        
        Boolean isPresent = driver.findElements(By.className("FormSelect-label")).size() > 0;
        
        System.out.println(isPresent);

        String titleText = "No Title";
        
        if (isPresent) {
        	titleText = driver.findElement(By.className("FormSelect-label")).getText();
        } 
    
        System.out.println(titleText);
        softAssert.assertEquals (titleText, "Title");
        softAssert.assertAll();
    }
    


    
    @And("^Close the browser$")
    public void close_browser() throws Throwable {

    	System.out.println("Closing the browser" );
    	
    	//wait(2);
    	driver.quit();

    }
}
package demo.AesopAshDemo;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
//import org.testng.asserts.Assertion;
import org.testng.asserts.SoftAssert;



import cucumber.api.java.en.*;

//import demo.AesopAshDemo.Variables;


public class TestSteps {


	//WebDriver driver = new InternetExplorerDriver();
	WebDriver driver = new ChromeDriver();
	String baseUrl = "http://www.aesop.com";
	String unknownEmail = "u@u.com";
	//String unknownEmail = "a@a.com";
	String knownEmail = "a@a.com";
	WebDriverWait wait = new WebDriverWait(driver, 20);
	//String product = "Rind Concentrate Body Balm";
	String product = "Lucent Facial Concentrate";
	//String product = "Ash";
	int seconds = 20;

	//private Assertion hardAssert = new Assertion();
	private SoftAssert softAssert = new SoftAssert();
	  
    @Given("^Navigate to home page$")
    public void main_page() throws Throwable {

     	System.out.println("Going to Main Page" );
      
     	// Going to Main Page
     	driver.get(baseUrl);

    }
    
    @When("^Click on Login button$")
    public void login_button() throws Throwable {

    	System.out.println("Clicking on Login Button" );

    	//Need to fine tune wait so that tests run faster as while loading the login element is not clickable but visible
    	Thread.sleep(seconds*1000);
    	
    	WebElement login = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@data-test-ref='NAV_LOGIN']/span")));
    	String loginText = driver.findElement(By.xpath("//*[@data-test-ref='NAV_LOGIN']/span")).getText();
       
        //System.out.println(loginText);
        
        //Test Step will fail if login text is not "Login"
        softAssert.assertEquals (loginText, "Login");

        softAssert.assertAll();
        login.click();

     }
    
    @Then("^Login screen appears$")
    public void login_window() throws Throwable {
        System.out.println("Verifying whether continue button is available or not" );
                
        String continueButton = wait.until(ExpectedConditions.elementToBeClickable(By.className("Btn-label"))).getText();

        System.out.println(continueButton);
        
       //Test Step will fail if submit text is not "Continue"
        softAssert.assertEquals (continueButton, "Continue");
        softAssert.assertAll();
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

        //Need to fine tune wait so that tests run faster as next statement was failing frequently
        Thread.sleep(seconds*1000);
        
        
        //WebElement noUse = wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("LoginForm")));
        
        //Verifying whether element containing text 'Title' is present or not.
        Boolean isPresent = driver.findElements(By.className("FormSelect-label")).size() > 0;
        
        //System.out.println(isPresent);

        //defaulting value to 'No Title' 
        String titleText = "No Title";
        
        //If element containing text 'Title' is available then get its text.
        if (isPresent) {
        	titleText = driver.findElement(By.className("FormSelect-label")).getText();
        } 
    
        //System.out.println(titleText);
        
        //Validating the text, step will fail if Title is not available.
        softAssert.assertEquals (titleText, "Title");
        softAssert.assertAll();
    }
 
    @And("^Close the browser$")
    public void close_browser() throws Throwable {

    	System.out.println("Closing the browser" );
    	
    	//Waiting for 3 seconds before closing the browser
    	Thread.sleep(3000);
    	driver.quit();

    }
    
    @Given("^Open a product category$")
    public void select_product() throws Throwable {
    	main_page();
    	
    	Thread.sleep(seconds*1000);
    	
    	//Have to scroll down until we find the Product Carousel
    	
    	JavascriptExecutor js = (JavascriptExecutor) driver;
    	WebElement prodScroll = driver.findElement(By.cssSelector(".MCItemCarousel-Item.is-selected"));
    	js.executeScript("arguments[0].scrollIntoView();", prodScroll);
    	
    	//System.out.println("Scrolled");
    	
    	//Verifying whether product provided is available or not
    	Boolean isPresent = driver.findElements(By.xpath("//*[@data-component-id='"+product+"']/a")).size() > 0;
    	Boolean isPresent2 = true;
    	
    	//If product provided is not visible then click on next until product is available
    	while (!isPresent || !isPresent2) {
	    		WebElement tmpElement= driver.findElement(By.xpath("//*[contains(@class, 'MCCarouselNav MCCarouselNav--next')]/button"));
	    		js.executeScript("arguments[0].click();", tmpElement);
	    		
	    		isPresent = driver.findElements(By.xpath("//*[@data-component-id='"+product+"']/a")).size() > 0;
	    		isPresent2 = driver.findElements(By.xpath("//*[@class='MCCarouselNav MCCarouselNav--next']//button[@disabled='true']")).size() > 0;
    		
	    		Thread.sleep(2000);
	    		if (isPresent2) {
	    			break;
	    		}
    	};
    	
   	
    	if (isPresent) {
    		WebElement prod = driver.findElement(By.xpath("//*[@data-component-id='"+product+"']/a"));
    		js.executeScript("arguments[0].click();", prod);

    	} else if (isPresent2){
    		
    		//Need to provide next steps if product is not available as rest of steps will fail. We should fail the rest of test case when product is not available.
    		System.out.println("No such Product");
    	}
   	
    }  
    
    @When ("^Add a product to the cart$")
    public void add_to_card() throws Throwable {
    	System.out.println("Adding to Cart");
    	
    	//Need to fine tune wait so that tests run faster, not implement in next statement for element
    	Thread.sleep(seconds*1000);
   	
    	WebElement addCart = driver.findElement(By.cssSelector(".Btn.Btn--action.Btn--filled.Btn--large.PDPHeaderCommonCTA-btn"));

    	//50% of time before method to click was failing
    	//WebElement addCart = wait.until(ExpectedConditions.elementToBeClickable(By.className("Btn-label")));
    	//addCart.click();
    	
    	//Using javascript to click add into cart as there are two button with same functionality but one of them is hidden.
    	JavascriptExecutor js = (JavascriptExecutor) driver;
    	js.executeScript("arguments[0].click();", addCart);
    	
    	
    }
    
    @Then ("^View the cart and checkout$")
    public void cart() throws Throwable {
    	Thread.sleep(seconds*100);
    	System.out.println("Viewing cart");
    	
    	WebElement cartButton = driver.findElement(By.className("Nav-cart"));
    	JavascriptExecutor js = (JavascriptExecutor) driver;
    	js.executeScript("arguments[0].click();", cartButton);
    	
    	//Giving wait time to user viewing
    	Thread.sleep(seconds*1000/2);
    	WebElement checkoutButton = driver.findElement(By.cssSelector(".Btn.Btn--large.CartSummary-checkoutBtn"));
    	checkoutButton.click();
    	
    }
    
    
    
    @And ("^Enter an email address in the checkout process$")
    public void checkout() throws Throwable {
    	Thread.sleep(seconds*1000);
    	
    	System.out.println("Entering email" );
    	WebElement emailTextBox = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".FormText-input.CheckoutCustomer-formTextInput")));
    	
    	emailTextBox.sendKeys(knownEmail);
    	
    	//Giving wait time to user viewing
    	Thread.sleep(seconds*1000);
    	

    	
    	
    }
     
    
}
Feature: SignUpPage for Unknown Email

	Scenario: Validate that an unknown email address results in being asked for Title/Firstname/Lastname 
    		Given Navigate to login page
    		When Enter unknown email address
    		Then Screen appears with Title, Firstname and Lastname
    		#And Close the browser
package autotests.test.step_definitions;


import autotests.test.helpers.AdditionalConditions;
import autotests.test.helpers.PropertiesUtil;
import autotests.test.model.common.AdminLoginModel;
import autotests.test.model.common.CommonModel;
import autotests.test.pageobjects.AdminLoginPageObject;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;

public class AdminLoginStepDefinitions {
    private CommonModel commonModel = new CommonModel();
    private AdminLoginModel adminLoginModel = new AdminLoginModel();

    @Given("^I add the test case IDs to the shared storage for hiptest reporting$")
    public void i_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable dataTable) throws Throwable {
        String suite = dataTable.asMaps(String.class, String.class).get(0).get("suite");
        String testCaseId = dataTable.asMaps(String.class, String.class).get(0).get("test-case-id");
        commonModel.addTestCaseIdsToSharedStorage(suite, testCaseId);
    }

    @When("^I navigate to the openhim landing page$")
    public void i_navigate_to_the_openhim_landing_page() throws Throwable {
        AdditionalConditions.waitOnAngular(Hooks.driver);
        PageFactory.initElements(Hooks.driver, AdminLoginPageObject.class);
        System.out.println(PropertiesUtil.getPropertyAsString("test-url"));
        System.out.println(Hooks.driver);
        Hooks.driver.get(PropertiesUtil.getPropertyAsString("test-url"));
    }

    @When("^I enter username of$")
    public void i_enter_username_of(DataTable dataTable) throws Throwable {
        AdditionalConditions.waitOnAngular(Hooks.driver);
        String username = dataTable.asMaps(String.class, String.class).get(0).get("username");
        System.out.println("The username is : "+ username);
        adminLoginModel.enterUsername(username);
    }

    @When("^I enter a password of \"(.*?)\"$")
    public void i_enter_a_password_of(String password) throws Throwable {
        AdditionalConditions.waitOnAngular(Hooks.driver);
        System.out.println("The password is : "+ password);
        adminLoginModel.enterPassword(password);
    }

    @When("^I click the login button$")
    public void i_click_the_login_button() throws Throwable {
        adminLoginModel.clickLogin();
    }

    @Then("^I am confronted by the openhim-dashboard$")
    public void i_am_confronted_by_the_openhim_dashboard() throws Throwable {

    }

    @Given("^II add the test case IDs to the shared storage for hiptest reporting$")
    public void ii_add_the_test_case_IDs_to_the_shared_storage_for_hiptest_reporting(DataTable arg1) throws Throwable {

    }

    @When("^I am logged into the openhim console$")
    public void i_am_logged_into_the_openhim_console() throws Throwable {

    }

    @When("^I click on the logout button$")
    public void i_click_on_the_logout_button() throws Throwable {

    }

    @Then("^I should be logged out of the console$")
    public void i_should_be_logged_out_of_the_console() throws Throwable {

    }
}

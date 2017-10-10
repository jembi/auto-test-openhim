package autotests.test.pageobjects;

import com.fasterxml.jackson.databind.ser.Serializers;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AdminLoginPageObject extends BasePage {

    public AdminLoginPageObject(WebDriver driver) {
        super(driver);
    }

    @FindBy(how = How.XPATH, using = "//*[@id='body']/div/div/div/div/div[1]/form/input[1]")
    public static WebElement usernameField;

    @FindBy(how = How.XPATH, using = "//*[@id='body']/div/div/div/div/div[1]/form/input[2]")
    public static WebElement passwordField;


    @FindBy(how = How.XPATH, using = "//*[@id='body']/div/div/div/div/div[1]/form/div[2]/input")
    public static WebElement loginButton;


}

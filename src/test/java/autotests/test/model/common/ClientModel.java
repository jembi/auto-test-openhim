package autotests.test.model.common;

import autotests.test.helpers.AdditionalConditions;
import autotests.test.helpers.DriverFunctions;
import autotests.test.pageobjects.ClientPageObject;
import autotests.test.step_definitions.Hooks;
import com.sun.deploy.util.SessionState;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import static autotests.test.pageobjects.ClientPageObject.addClientButton;
import static autotests.test.pageobjects.ClientPageObject.addRoleButton;
import static autotests.test.pageobjects.ClientPageObject.saveClientPage;

public class ClientModel {

    public void selectClientMenu()
    {  AdditionalConditions.waitOnAngular(Hooks.driver);
       ClientPageObject.clientMenuItem().click();
    }
    public void selectRole(){
        AdditionalConditions.waitOnAngular(Hooks.driver);
        DriverFunctions.waitForElement(Hooks.driver,By.xpath("//*[@id='body]/div/div/div[2]/div/div[2]/div/button"));
        addRoleButton.click();
    }
    public void selectClient(){
        AdditionalConditions.waitOnAngular(Hooks.driver);
        DriverFunctions.waitForElement(Hooks.driver,By.xpath("//*[@id='body']/div/div/div[2]/div/div[4]/button"));
        addClientButton.click();
    }
    public void saveClientPage(){
        DriverFunctions.waitForElement(Hooks.driver,By.xpath("//button[@ng-click='submitFormClients()']"));

        saveClientPage.click();
    }

    //Client Details
    public void addClientID(String clientID){
        DriverFunctions.waitForElement(Hooks.driver,By.cssSelector("[ng-model*='client.clientID']"));
        Hooks.driver.findElement(By.cssSelector("[ng-model*='client.clientID']")).sendKeys(clientID);
    }
    public void addClientName(String clientID){
        DriverFunctions.waitForElement(Hooks.driver,By.cssSelector("[ng-model*='client.name']"));
        Hooks.driver.findElement(By.cssSelector("[ng-model*='client.name']")).sendKeys(clientID);
    }
    public void addclientOrganisation(String clientID){
        DriverFunctions.waitForElement(Hooks.driver,By.cssSelector("[ng-model*='client.organization']"));
        Hooks.driver.findElement(By.cssSelector("[ng-model*='client.organization']")).sendKeys(clientID);
    }
    public void addroleName(String clientID){
        DriverFunctions.waitForElement(Hooks.driver,By.cssSelector("[ng-model*='formData.newClientRole']"));
        Hooks.driver.findElement(By.cssSelector("[ng-model*='formData.newClientRole']")).sendKeys(clientID);
    }
    public void addauthPass(String clientID){
        DriverFunctions.waitForElement(Hooks.driver,By.cssSelector("[ng-model*='temp.password']"));
        Hooks.driver.findElement(By.cssSelector("[ng-model*='temp.password']")).sendKeys(clientID);
    }
    public void addauthPassConf(String clientID){
        DriverFunctions.waitForElement(Hooks.driver,By.cssSelector("[ng-model*='temp.passwordConfirm']"));
        Hooks.driver.findElement(By.cssSelector("[ng-model*='temp.passwordConfirm']")).sendKeys(clientID);
    }




    public void addClientName() {

    }

}

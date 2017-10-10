package autotests.test.model.common;

import autotests.test.pageobjects.AdminLoginPageObject;

public class AdminLoginModel {
    public void enterUsername(String Text) {
        AdminLoginPageObject.usernameField.sendKeys(Text);
    }

    public void enterPassword(String Text) {
        AdminLoginPageObject.passwordField.sendKeys(Text);
    }

    public void clickLogin() {
        AdminLoginPageObject.loginButton.click();
    }

}

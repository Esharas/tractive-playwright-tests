const BasePage = require('./basePage');
const { expect } = require('@playwright/test');

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.firstname = "firstName";
        this.LastName= "lastName";
        this.emailField = 'email';
        this.passwordField = 'password';
        this.registerButton = 'Create Account';
    }

    async fillRegistrationForm(email, password) {

        await this.page.fill(this.firstname,'Testuser1');
        await this.page.fill(this.LastName,'Testuserlastname1')
        await this.page.fill(this.emailField, email);
        await this.page.fill(this.passwordField, password);
        await page.locator('#input-device-id-0').click();
        await this.page.click(this.registerButton);

    }

    async verifyRegistration() {

        await expect(this.page).toHaveURL(/activation/);
        await page.getByRole('heading', { name: 'Enter Tracker ID' })
       
    }
}

module.exports = RegistrationPage;


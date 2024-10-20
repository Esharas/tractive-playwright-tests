const BasePage = require('./basePage');
const { expect } = require('@playwright/test');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailField = 'email';
        this.passwordField = 'password';
        this.loginButton = 'Sign In';
    }

    async fillLoginForm(email, password) {
        await this.page.fill(this.emailField, email);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    async verifyLogin() {

        await expect(this.page).toHaveURL(/settings/);
        await expect('heading', { name: 'Manage your Account' })
        
    }
}

module.exports = LoginPage;

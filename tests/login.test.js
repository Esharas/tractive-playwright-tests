const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');


test.describe('Login Tests', () => {
    test('User can login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://my-stage.tractive.com/login');
        
        await loginPage.fillLoginForm('testuser@test.com', 'Test@1234');
        await loginPage.verifyLogin();
    });
});

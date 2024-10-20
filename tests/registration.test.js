
const { test } = require('@playwright/test');
const RegistrationPage = require('../pages/registrationPage');

test.describe('Registration Tests', () => {
    test('User can register successfully', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigateTo('https://my-stage.tractive.com/register');
        
        const randomEmail = `user${Math.floor(Math.random() * 10000)}@test.com`;
        await registrationPage.fillRegistrationForm(randomEmail, 'Test@1234');
        await registrationPage.verifyRegistration();
    });
});

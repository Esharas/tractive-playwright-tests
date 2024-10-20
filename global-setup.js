// global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  // Set the cookie globally for all tests
  await context.addCookies([{
    name: 'interview',
    value: '7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl',
    domain: '.tractive.com',
    path: '/'
  }]);
  await browser.close();
};



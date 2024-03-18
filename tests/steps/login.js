import { Given, When, Then } from "@cucumber/cucumber";

//const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

Given('User navigates to the application', async () => {
    this.browser = await chromium.launch();
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    await this.page.goto("https://talent500.co/auth/signin");
});

When('I enter the username as “Enter email"', async () => {
    await this.page.fill('input[name="email"]', 'your_username');
});

When('I enter the password as “Enter password"', async () => {
    await this.page.fill('input[name="password"]', 'your_password');
});

When('I click on login button', async () => {
    await Promise.all([
        this.page.waitForNavigation(), // Wait for navigation to finish
        this.page.click('button[type="submit"]'), // Click on login button
    ]);
});

Then('User should logged in successfully', async () => {
    // You can add assertions here to verify successful login
    // For example, you can check for elements available on the dashboard
    // await this.page.waitForSelector('selector_for_dashboard_element');
});

Then('Logout from the application', async () => {
    // Implement logout process if available
    // For example, you can find logout button and click on it
});

// Close browser after scenario completes
After(async () => {
    await this.browser.close();
});

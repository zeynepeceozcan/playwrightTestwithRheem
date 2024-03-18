const { Given, When, Then } = require("@cucumber/cucumber");
 
const { chromium, expect } = require("@playwright/test");
 
        Given('User navigates to the application',async (page) => {
 
          await page.launch({ headless: false });
         
          const context = await browser.newContext();
         
          this.page = await context.newPage();
         
          await this.page.goto("https://talent500.co/auth/signin");
         
          });
         When('I enter the username as “Enter email"', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 
 
         When('I enter the password as “Enter password"', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 
 
         When('I click on login button', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 
         Then('User should logged in successfully', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 
 
         Then('Logout from the application', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
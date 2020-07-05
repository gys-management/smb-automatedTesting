const { Given, When, Then } = require('cucumber');
const userData = require('../../support/userData');
const fs = require('fs');
const yaml = require('js-yaml');
let ul;
let fileContents = fs.readFileSync('support/url.yml', 'utf8');
let data = yaml.safeLoad(fileContents);
let fileContents_locators = fs.readFileSync('support/url.yml', 'utf8');
const actionFile = require('./ActionFile');
Given(/^I open the (.*) and login with (.*) id$/, function (url, agent) {

  browser.url(data[url]);
  let isDisplayed = $(`//*/input[@name="userName"]`);
  isDisplayed.waitForDisplayed(30000);
  userName = userData[agent].mobile;
  password = userData[agent].password;
  $('//*/input[@name="userName"]').setValue(userName);
  $('//*/input[@name="password"]').setValue(password);
  browser.pause(200);
  $('//*/ion-button[text()="Login"]').click();

});

Given(/^navigate to (.*) page with specific (.*)$/, function (details, ProCategory) {
  $('//*[@class="dashboard-nav-ion-card-content md card-content-md hydrated"][contains(text(),"Customer")]').waitForDisplayed(30000);
  $('//*[@class="dashboard-nav-ion-card-content md card-content-md hydrated"][contains(text(),"Customer")]').click();
  let details_tab = $('//*[@id="main-content"]/app-customer/ion-header/ion-toolbar/ion-buttons/ion-menu-button').waitForDisplayed(10000);

  $('//*[@id="main-content"]/app-customer/ion-header/ion-toolbar/ion-buttons/ion-menu-button').click();
  switch (details) {
    case 'customer':


      $('//*/ion-label[contains(text(),"Customer")]').waitForDisplayed(3000);
      $('//*/ion-label[contains(text(),"Customer")]').click();
      browser.pause(4000);
      break;
    case 'product':
      $('//*/ion-label[contains(text(),"Product")]').waitForDisplayed(30000);
      $('//*/ion-label[contains(text(),"Product")]').click();
      actionFile.productDetailsPage(ProCategory);

      break;
    case 'order':
      $('//*/ion-label[contains(text(),"Orders")]').waitForDisplayed(30000);
      $('//*/ion-label[contains(text(),"Orders")]').click();
      break;
    default:
      console.log(`${page} is not available`);
  }



});


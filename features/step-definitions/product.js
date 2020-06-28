const { Given, When, Then } = require('cucumber');
const userData = require('../../support/userData');
const fs = require('fs');
const yaml = require('js-yaml');
let ul;
let fileContents = fs.readFileSync('support/url.yml', 'utf8');
let data =  yaml.safeLoad(fileContents);

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

Given(/^navigate to (customer|product|order) page$/, function (page) {
  $('//*/ion-button[text()="Click here for customer"]').waitForDisplayed(30000);
  switch (page) {
    case 'customer':
      
      $('//*/ion-card-content[text()=" Orders "]').click();
      break;
    case 'product':
      $('//*/ion-button[text()="Click here for Product"]').waitForDisplayed(30000);
      $('//*/ion-button[text()="Click here for Product"]').click();
      break;
    case 'order':
      $('//*/ion-button[text()="Click here for orde"]').waitForDisplayed(30000);
      $('//*/ion-button[text()="Click here for orde"]').click();
      break;
    default:
      console.log(`${page} is not available`);
  }

});
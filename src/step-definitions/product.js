const { Given, When, Then } = require('cucumber');


Given(/^I open the (.*)$/, function (url) {
     browser.url(url) 
    //  browser.pause(10000)
  });
const { Given, When, Then } = require('cucumber');
const userData = require('../../support/userData');
const fs = require('fs');
const yaml = require('js-yaml');
let ul;
let fileContents = fs.readFileSync('support/url.yml', 'utf8');
let data = yaml.safeLoad(fileContents);
let fileContents_locators = fs.readFileSync('support/url.yml', 'utf8');
const ActionFile = require('./ActionFile');
let details1 = new ActionFile();

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

Given(/^navigate to the (.*) page$/, function (details) {
 details1.ViewPage(details);
    });
When(/^navigate to the product page with detailed ProCategory$/,function(){
  details1.productDetailsPage();
  browser.pause(3000);
      })
When(/^Search the product by various sections (.*)$/,function(method){
  details1.SearchProductsMethods(method);
})

Then(/^user click on the sidebar tool icon$/,function(){
  details1.drawdownSymbol();
})

When(/^select the darkmode option$/, function(){
details1.darkMode();

})

Then(/^user want to signout from the application$/, function(){
  details1.signOut();
  browser.pause(2500);
})

When(/^user want to check the (.*) of the orders$/, function(status){
  details1.statusChecking(status);
})

Then(/^user enter the order (.*) to search the details$/, function(numb){
  details1.searchOrdersNum(numb);
});

When(/^user click on the order number link$/, function(){
  details1.clickOrderNum();
})

When(/^check the order date detail is there for (.*)$/,function(orderDate){
  details1.orderdate(orderDate);
})

Then(/^check the estimated delivery date is there for(.*)$/,function(deliveryDate){
  details1.deliveryDate(deliveryDate);
})

When(/^check the total amount field for(.*)$/,function(totalAmount){
  details1.totalAmount(totalAmount);
  details1.listOfProduct_Headers();
  details1.listOfProductDetails();
})


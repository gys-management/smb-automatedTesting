const { Given, When, Then } = require('cucumber');
const userData = require('../../support/userData');
const fs = require('fs');
const yaml = require('js-yaml');
let ul;
let fileContents = fs.readFileSync('support/url.yml', 'utf8');
let data = yaml.safeLoad(fileContents);
let fileContents_locators = fs.readFileSync('support/url.yml', 'utf8');
const ActionFile = require('./ActionFile');
const ActionFile2=require('./ActionFile2');
let details1 = new ActionFile();
let details2=new ActionFile2();

Given(/^I open the (.*) and login with (.*) id$/, function (url, agent) {
  browser.url(data[url]);

  
  

 
  let isDisplayed = $(`//*/input[@name="userName"]`);
  isDisplayed.waitForDisplayed(30000);
  userName = userData[agent].mobile;
  password = userData[agent].password;
  $('//*/input[@name="userName"]').setValue(userName);
  $('//*/input[@name="password"]').setValue(password);
  browser.pause(200);
  $('//*/*[@type="submit"]').click();

  
    

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

Then(/^user click on searchCustomerDetails page and enter the(.*)$/,function(Customername){
  details2.searchCustomerDetails(Customername);
})

Then(/^user enter the orderNumber (.*) to search CustomerDetails$/, function(num){
  details2.searchOrders(num);
  
});

Then(/^user check for the Order Amount(.*) and (.*)$/, function(order_Amt,order_Text){
details2.OrderAmount(order_Amt,order_Text);
  

});

When(/^user ceck  for the Received Amount(.*) and (.*)$/, function(received_Amt,received_Text){
  details2.ReceivedAmount(received_Amt,received_Text);

})

Then(/^user ceck  for the Pending Amount(.*) and (.*)$/, function(pending_Amt,pending_Text){
details2.PendingAmount(pending_Amt,pending_Text);
})

Then(/^check the (.*) field is present with (.*)$/, function(Bill_To,Customername){
  details2.BillingToNameDetails(Bill_To,Customername);
})

When(/^check the (.*) and (.*) and (.*) and (.*) and (.*) for the customer$/, function(name,phonenumber,address,email,pincode){
details2.BillingToAddressDetails(name,phonenumber,address,email,pincode);
})


Then(/^check the (.*) field is present for the (.*)$/, function(Bill_From,Owner){
  details2.BillingToNameDetails(Bill_From,Owner);
})

When(/^check the (.*) and (.*) and (.*) and (.*) and (.*) for the  delivered customer$/, function(name,phonenumber,address,email,pincode){
details2.BillingToAddressDetails(name,phonenumber,address,email,pincode);
})



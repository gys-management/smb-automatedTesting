module.exports=class ActionFile2 {

searchCustomerDetails(Customername){
    let searchCustomer=$('//*[@id="main-content"]/app-customer/ion-content/div[2]/ion-grid/ion-row[1]/ion-col/ion-searchbar/div/input');
    Customername=Customername.toString();
    searchCustomer.setValue("Devi");
    browser.pause(1000);
    browser.keys("\uE007");
    browser.pause(2000);
    $('//*[@role="gridcell"]/*/*[@class="sc-ion-label-md-h sc-ion-label-md-s md hydrated"]/*[@class="company-name"]').click();
    // selectCustomer.click();
    browser.pause(5000);
    
    
}

searchOrders(num){
    // $('//*[@aria-label="search text"]\n');
   // let searchNumOrder=$('//*[@aria-label="search text"]').click();
   let searchNumOrder=$('//*[@id="main-content"]/app-detail-cust/ion-content/ion-grid/ion-row[2]/ion-col/app-order-list/div[2]/ion-searchbar/div/input');
   searchNumOrder.setValue(num);
   browser.pause(5000);
   browser.keys("\uE007");
   browser.pause(3000);
    
}

OrderAmount(order_Amt,order_Text){
    $('//*[@class="sc-ion-label-md-h sc-ion-label-md-s md hydrated"][contains(text(),'+order_Text+')]');
    let Order_Amount=$('//*[@class=“md list-md hydrated”]/*/*[@class=“ng-star-inserted sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-primary md hydrated”]').getText();
     if(Order_Amount===order_Amt){
console.log("Hiii:"+Order_Amount.getText());


     }
}

}
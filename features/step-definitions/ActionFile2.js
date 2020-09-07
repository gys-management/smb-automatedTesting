module.exports=class ActionFile2 {

searchCustomerDetails(Customername){
    let searchCustomer=$('//*[@id="main-content"]/app-customer/ion-content/div[2]/ion-grid/ion-row[1]/ion-col/ion-searchbar/div/input');
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
  
    $(`//*[@class="md list-md hydrated"]/*[1]/*[@class="sc-ion-label-md-h sc-ion-label-md-s md hydrated"][contains(text(),'${order_Text}')]`);
    let Order_Amount=$('//*[@class="md list-md hydrated"]/*[1]/*[3][@class="ng-star-inserted sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-primary md hydrated"]').getText();
     if(Order_Amount===order_Amt){
console.log("Hiii:"+Order_Amount.getText());


     }
}

ReceivedAmount(received_Amt,received_Text){
    $(`//*[@class="md list-md hydrated"]/*[1]/*[@class="sc-ion-label-md-h sc-ion-label-md-s md hydrated"][contains(text(),'${received_Text}')]`);
    let Received_Amount=$('//*[@class="md list-md hydrated"]/*[2]/*[3][@class="ng-star-inserted sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-primary md hydrated"]').getText();
     if(Received_Amount===received_Amt){
console.log("Hiii:"+Received_Amount.getText());


     }
}

PendingAmount(pending_Amt,pending_Text){
    $(`//*[@class="md list-md hydrated"]/*[1]/*[@class="sc-ion-label-md-h sc-ion-label-md-s md hydrated"][contains(text(),'${pending_Text}')]`);
    let Pending_Amount=$('//*[@class="md list-md hydrated"]/*[3]/*[3][@class="ng-star-inserted sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-primary md hydrated"]').getText();
     if(Pending_Amount===pending_Amt){
console.log("Hiii:"+Pending_Amount.getText());


     }
     }
     BillingToNameDetails(Bill_To,Customername){
        $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[1]/ion-card/ion-item/ion-card-header/ion-card-subtitle[1][contains(text(),"${Bill_To}")]`);
        $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[1]/ion-card/ion-item/ion-card-header/ion-card-title[contains(text(),'${Customername}')]`);

     }

     BillingToAddressDetails(name,phonenumber,address,email,pincode){
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[1]/ion-card/ion-item/ion-card-header/ion-card-subtitle[2][contains(text(),'${name}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[1]/ion-card/ion-item/ion-card-header/ion-card-subtitle[3][contains(text(),'${phonenumber}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[1]/ion-card/ion-item/ion-card-header/ion-card-subtitle[4][contains(text(),'${address}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[1]/ion-card/ion-item/ion-card-header/ion-card-subtitle[4][contains(text(),'${email}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[1]/ion-card/ion-item/ion-card-header/ion-card-subtitle[4][contains(text(),'${pincode}')]`);
     }


     BillingFromNameDetails(Bill_From,Owner){
        $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[2]/ion-card/ion-item/ion-card-header/ion-card-subtitle[1][contains(text(),"${Bill_From}")]`);
        $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[2]/ion-card/ion-item/ion-card-header/ion-card-title[contains(text(),'${Owner}')]`);

     }

     BillingFromAddressDetails(name,phonenumber,address,email,pincode){
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[2]/ion-card/ion-item/ion-card-header/ion-card-subtitle[2][contains(text(),'${name}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[2]/ion-card/ion-item/ion-card-header/ion-card-subtitle[3][contains(text(),'${phonenumber}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[2]/ion-card/ion-item/ion-card-header/ion-card-subtitle[4][contains(text(),'${address}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[2]/ion-card/ion-item/ion-card-header/ion-card-subtitle[4][contains(text(),'${email}')]`);
         $(`//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[1]/ion-col[2]/ion-card/ion-item/ion-card-header/ion-card-subtitle[4][contains(text(),'${pincode}')]`);
     }





}
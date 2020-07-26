// var seleniumWebdriver = require('selenium-webdriver');
// var By = seleniumWebdriver.By
// var Keys=seleniumWebdriver.Key
// var chromedriver = require('chromedriver');
// var driver
module.exports=class ActionFile {
    // constructor() {
    //     driver = new seleniumWebdriver.Builder().forBrowser('chrome');
    // };
    productDetailsPage() {
       
        let Product_Category_Dropdown=$('//*/ion-label[contains(text(),"Product")]');
        Product_Category_Dropdown.waitForDisplayed(30000);
        Product_Category_Dropdown.click();
        browser.pause(3000);
        
    }
    ViewPage(details){
        let view=$('//*[@class="dashboard-nav-ion-card-content md card-content-md hydrated"][contains(text(),"'+details+'")]');
        view.click();
        browser.pause(2000);
       
       }

       drawdownSymbol(){
        let details_tab = $('//*[@id="main-content"]/app-product-detail/ion-header/ion-toolbar/ion-buttons/ion-menu-button');
        //*[@id="main-content"]/app-customer/ion-header/ion-toolbar/ion-buttons/ion-menu-button
        details_tab.waitForDisplayed(3000);
        details_tab.click();
       }

    SearchProductsMethods(method){
        let Search_Product_tiles=$('//*[@id="label"][contains(text(),"'+method+'")]');
        Search_Product_tiles.waitForDisplayed(2000);
        Search_Product_tiles.click();
    }
   
    darkMode(){
        let darkmode=$('/html/body/app-root/ion-app/ion-menu/ion-content/ion-list[2]/ion-item/ion-toggle');
        darkmode.waitForDisplayed(2000);
        darkmode.click();
    }

    signOut(){
        let signOut=$('//*[@class="sc-ion-label-md-h sc-ion-label-md-s md hydrated"][contains(text(),"Sign-out")]');
        signOut.waitForDisplayed(2500);
        signOut.click();
    }

    statusChecking(status){

        if(status==="Pending"){
            console.log("Hiii inside the pending loop");
        let pending=$('//*[@id="main-content"]/app-order/ion-header/ion-segment/ion-segment-button[1]');
       
        //pending.waitForDisplayed(10000);
        pending.click(); 
        browser.pause(4000);
        
        
        }
        else if(status==="completed"){
            let completed=$(' //*[@id="main-content"]/app-order/ion-header/ion-segment/ion-segment-button[2]');
            completed.waitForDisplayed(2300);
            completed.click();
            browser.pause(5000);
      
        }
        else if(status==="cancelled"){
            let cancelled=$('//*[@id="main-content"]/app-order/ion-header/ion-segment/ion-segment-button[3]');
            cancelled.waitForDisplayed(2300);
            cancelled.click();
            browser.pause(2000);
       
        }

        }
       searchOrdersNum(orderNumber){
            // $('//*[@aria-label="search text"]\n');
           // let searchNumOrder=$('//*[@aria-label="search text"]').click();
            let searchNumOrder=$('//*[@id="main-content"]/app-order/ion-content/ion-slides/div/ion-slide[1]/app-order-list/div/div[1]/ion-searchbar/div/input');
            searchNumOrder.setValue(orderNumber);
            browser.pause(5000);
            browser.keys("\uE007");
            browser.pause(3000);
            

        }
        }
 


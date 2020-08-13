// var seleniumWebdriver = require('selenium-webdriver');
// var By = seleniumWebdriver.By
// var Keys=seleniumWebdriver.Key
// var chromedriver = require('chromedriver');

const { WebElement, By } = require("selenium-webdriver");

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

        clickOrderNum(){

            let Orderlink=$('//*[@class="md button button-clear ion-activatable ion-focusable hydrated"]/a');
            //href="/order/detail/5ef7bd236e4e6f3299c0cf1b"
            
            Orderlink.click();
            browser.pause(3000);

        }

        orderdate(orderdate){

            let orderTxt=$('//*[@id="ion-dt-0-lbl"]');
            orderTxt.waitForDisplayed(1000);
            let orderDate=$('//*[@placeholder="Select Date"and @formcontrolname="orderedDate"]');
            orderDate.getText();
            if(orderDate.getText()===orderdate){
            console.log("Hii:"+orderDate.getText());
           }
        }

        deliveryDate(deliveryDate){

            let estimatedTxt=$('//*[@id="ion-dt-1-lbl"]');
            estimatedTxt.waitForDisplayed(1000);
            let estimatedDate=$('//*[@placeholder="Select Date"and @formcontrolname="estimatedDeliveryDate"]');
            estimatedDate.getText();
            if(estimatedDate.getText()=== deliveryDate){
            console.log("Hii:"+estimatedDate.getText());
            
           }

        }

        totalAmount(totalAmount){

            let totalAmount_txt=$('//*[@class="sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-primary md hydrated"][contains(text(),"Total Amount")]');
            totalAmount_txt.waitForDisplayed(300);
            browser.pause(3400);
            let totalAmount_value=$('//*[@class="ion-text-right sc-ion-label-md-h sc-ion-label-md-s md hydrated"][contains(text(),'+totalAmount+')]');
            totalAmount_value.waitForDisplayed(1200);
        }


        listOfProduct_Headers(){

            console.log("list of Headers");
          let  columnheader=$$('//*[@class="mat-table cdk-table ng-tns-c155-9 ng-star-inserted"]/*[@role="rowgroup"]/*[@role="row"]/*[@role="columnheader"]').length;
              console.log("columnheader:"+columnheader);
            for (let i= 1; i<=columnheader; i++) {

               
                // console.log("inside for loop");
                 const element = $('//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[3]/ion-col/table/thead/tr/th['+i+']/ion-label').getText();
                if(element==="Name"){
                    console.log("Name header is enabled");
                    }
                    else if(element==="Price"){
                        console.log("Price header is enabled");
                    }
                    else if(element==="Quantity"){
                        console.log("Quantity is enabled");
                    }
                    else if(element==="Sub-Total"){
                        console.log("Sub-Total header is enabled");
                    }

                    else if(element==="GST"){
                        console.log("GST is enabled");
                    }
                    else if(element==="Total"){
                        console.log("Total is enabled");
                    }
                
            }
        }

        listOfProductDetails(){
            let rowcount=$$('//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[3]/ion-col/table/tbody/tr').length;

            console.log("rowcount:"+rowcount);
            // let columncount=$('//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[3]/ion-col/table/tbody/tr[1]/td');

            for(let i=1;i<=rowcount;i++){
                if(!(i%2==0)){
                let columncount=$$('//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[3]/ion-col/table/tbody/tr['+i+']/td').length;

                for( let j=1;j<=columncount;j++){
                    if(j===1){
                    let productdetails=$('//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[3]/ion-col/table/tbody/tr['+i+']/td['+j+']/ion-label').getText();
                    console.log("The Product Details are mentiones as list"+i+","+j+":"+productdetails);
                    }
                    else{
                        let productdetails=$('//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[3]/ion-col/table/tbody/tr['+i+']/td['+j+']/ion-input');
                        console.log("The Product Details are mentiones as list"+i+","+j+":"+productdetails); 
                    }

                }
            }

            }

//*[@id="main-content"]/app-detail-order/ion-content/form/ion-grid/ion-row[3]/ion-col/table/tbody/tr[1]/td[3]/ion-input
        }
    }
        //*[@aria-labelledby="ion-input-12-lbl"]
       //*[@aria-labelledby="ion-input-6-lbl"]
        
        


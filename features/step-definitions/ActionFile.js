export class ActionFile {

    productDetailsPage(Product_Details) {
        if ($('//*[@id="label"][contains(text(),' + Product_Details + ')]')) {
            $('//*[@id="label"][contains(text(),' + Product_Details + ')]').click();
            broswser.pause(2000);
        }
    }
}
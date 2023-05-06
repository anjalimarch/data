

let page= require('./page.js')

import { browser, element, protractor } from "protractor";

describe('suite a',function(){


it('spec file to execute the test',function(){

browser.get("data validation for the url");
browser.waitForAngularEnabled(false);
browser.manage().window().maximize();

element(by.xpath('data validation')).sendKeys('datavalidation');
element(by.xpath('data validation for the input')).click();
element(by.xpath("data validation")).click();


let dataValidation= element(by.xpath("data validation"));

//mouse actions--



browser.actions().mouseMove(dataValidation).click().perform();


browser.actions().mouseMove(dataValidation).doubleClick().perform();
//or 
browser.actions().doubleClick(dataValidation).perform();


browser.actions().mouseDown().click().perform();
browser.actions().mouseUp().click().perform();

//right actions 

var button= element(by.model("xpath"));

browser.actions().click(button,protractor.Button.RIGHT).perform();
browser.actions().click(button,protractor.Button.RIGHT).perform();

browser.actoins().click(button,protractor.Button.RIGHT).perform();

browser.sleep(3000);

//drag and dropt 

var data= element(by.model('xpath'));
browser.actions().dragAndDrop(data).perform();


page.setName();







browser.driver.navigate.refresh();

browser.driver.navigate().refresh();



browser.sleep(2000);

browser.executerScript('window.scrollTo(0,-400)').then(function(){


browser.sleep(30000);


})



this.scrollUp=function(){

    browser.executeScript('window.scrollTo(0,400);').then(function(){


    })


}


this.scrollDown=function(){



    browser.executeScript('window.scrollTo(0,-400)').then(function(){







    })
}



this.isElementPresent= function(webElement){

expect(webElement.isPresent()).toBe(false);



}

this.isElementPresent=function(webElement){

var EC= protractor.ExpectedConditions;

browser.wait(function(){

browser.wait(EC.visiblilityOf(webElement),2000)


})


this.isElementDisplayed= function(webElement){

var EC= protractor.ExpectedConditions;


browser.wait(function(){



})



this.clickJavascript= function(webElement){

browser.executeScript("arguments[0].click()",webElement).then(function(){



});

}

}



this.scrollUP= function(webElement){


    browser.executeScript("window.scrollTO(0,400)",webElement).then(function(){



    })
}


}

browser.executeScript('argument[0].click()',webElement)


this.isElementAvailabel=function(){

    ec=protractor.ExpectedConditions;


    ec.presenceOf(webElement,30000);


    ec.presenceOf(webelement,40000);

    ec.visiblilityOf(webElement, 900);

    this.isElementVisible= function(){
        browser.wait(ec.invisibilityOf(webElement),700)
    }
    
    


}


})




})
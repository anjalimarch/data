const { browser, element } = require("protractor")

describe('function to suite',function(){



it('frames test',function(){
browser.waitForAngularEnabled(false);

browser.switchTo().frame("packageFrame");
element(by.linkText("datavalidation"));
browser.switchTo().defaultContent();
browser.switchTo().frame("packageFrame");

browser.switchTo().defaultContent();
browser.switchTo.frame("nameofthethirdframe");
browser.switchTo().defaultContent();
browser.sleep(4000);



})

it('frames test validation ',function(){




})

})
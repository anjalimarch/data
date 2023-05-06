const{browser}=require("protractor");


describe("A suite",function(){

it("setting up data for the case", function(){
browser.get("https://devopssaas2-qa.apps.tax/#/home");

browser.sleep(3000);
browser.manage().window().maximize();

expect(browser.getCurrntUrl()).toBe("https://devopssaas2-qa.apps.tax/#/home");

expect(true).toBe(true);

});

it("initialize the test ", function(){




  expect(browser.getTitle()).toBe("Mice");


})


});
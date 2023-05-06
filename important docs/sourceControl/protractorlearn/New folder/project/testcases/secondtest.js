const{browser, element}=require("protractor");


describe("A suite",function(){

it("setting up data for the case", function(){
browser.get("https://devopssaas2-qa.apps.tax/#/home");

browser.sleep(3000);
browser.manage().window().maximize();

expect(browser.getCurrentUrl()).toBe("https://devopssaas2-qa.apps.tax/#/home");

expect(true).toBe(true);

});

it("initialize the test ", function(){

  element(by.id("list-menu")).click();

  expect(browser.getTitle()).toBe("Mice");
expect(browser.getTitile()).toBe("datavalidation");

browser.manage().window().maximize();




})


});
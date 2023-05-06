const { browser, element } = require("protractor");

describe('creating employee login data ',function(){


it('data validation for employee creation of the data ',function(){


let alert =browser.switchTo().alert();

alert.accept();
alert.dismiss();

browser.sleep(3000);


element(by.model("xpath")).element(by.css(xpath)).click();

browser.sleep(2000);


element.all(by.tagName('tr')).first().element(by.id('view')).click();

expect(element(by.tagName("h3")).getText()).toBe("Product View");

expect(element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText()).toBe(product_name);
browser.sleep(3000);








});

});
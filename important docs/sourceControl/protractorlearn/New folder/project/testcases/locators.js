const { browser, element, By } = require("protractor");

describe("suite level testing ",function(){

    beforeAll("initializing the environment",function(){
     console.log("have a great day ")

     //non angular application 

     browser.waitForAngularEnabled(false);

     browser.ignoreSynchronization= true;

     


    })

    beforeEach("function for each test",function(){


        console.log("adding data for the test files");
    })

    afterAll("after all the tests and scripts execution",function(){
        
         console.log("after all the tests and scripts to automate");


    });




it("test level testing for the protractor ",function(){
browser.get("https://angularjs.org/");

element(by.xpath(""));

// elements and its xpaths for the same. 
// here are the below elements 
element(by.model("person name"));
element(by.binding('person.email'));
element.all(by.excactbinding('person-email'));

element(by.buttonText('Save'));
elemetnt(by.buttonText('Save As'));

let name = element(by.repeater('product info').row(0));
let gender = element(by.repeater('product infor').row(1));

let repeater= element(by.exactRepeater('emp in employee_names'));

let cssContainingText= element(by.cssContainingText('.name','Mike'));

let alloptions= element.all(by.options('options in lists'));
expect(alloptions.count()).toEqual(3);


element.all(by.tagName('tr')).first().element(by.id('delete')).click();

expect(element(by.xpath("data validation")).getText()).toBe("data validtion");

//

});

});


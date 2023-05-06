const { browser } = require("protractor");

let page=function(){


let data = element();
let datavalidtion= element();
let surpaas = element();


this.get=  function(url){

browser.get(url);


}

this.setName=  function(name){


    browser.sendKeys(name);
}


this.getDatavalidation=  function(dataValidation){

      browser.getText();



}


};
module.exports= new page();
module.exports= new page();
module.exports= new page();
module.exports= new page();

module.exports= new page();

module.exports= new loginPage();


this.getvalidation= function(){


    browser.getText()
}

protractor conf.js --suite __Protractor_TestType4__

protractor conf.js --suite smoke1 

protractor conf.js --suite smoke1 
protracrot conf.js --suite smoke2 



suites: {
    // integration: './integration/' + "__Protractor_TestName__" + '.js',
    integration: './prod-tests/' + "__Protractor_TestName__" + '.js',
    smoke1: './smoke-1/' + "__Protractor_TestName__" + '.js',
    smoke2: './smoke-2/' + "__Protractor_TestName__" + '.js',
    smoke3: './smoke-3/' + "__Protractor_TestName__" + '.js',
    regression1: './regression-1/' + "__Protractor_TestName__" + '.js',
    regression2: './regression-2/' + "__Protractor_TestName__" + '.js',
    regression3: './regression-3/' + "__Protractor_TestName__" + '.js',
    regression4: './regression-4/' + "__Protractor_TestName__" + '.js',
    miscellaneous: './miscellaneous/' + "__Protractor_TestName__" + '.js',
    prod: './prod-tests/' + "__Protractor_TestName__" + '.js',
    uat: './user-acceptance-tests/' + "__Protractor_TestName__" + '.js'

    uat:'./testcase/'+'*.spec'+'.js',

    uat:'./testcase/'+'*.spec'+'.js',
    smoke:'./testcase/'+'*.spec'+'.js',

    protractor --suite uat
    protractor --suite smoke 
    protractor --suite smoke
    protractor --suite uat 
    protractor --suite smoke1




},


protractor --suite uat 
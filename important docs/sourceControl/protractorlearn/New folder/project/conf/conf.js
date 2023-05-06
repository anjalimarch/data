// An example configuration file.
const { element, browser } = require('protractor');
var HtmlReporter= require('protractor-beautiful-reporter');
var jasmineReporters= require('jasmine-repoerters');

exports.config = {

  seleniumAddress: 'https://127.0.0.1:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..//testcases//secondtest.js'],

  specs:['..//testcases//firstcasse.js'],
  specs:['..//testcases//firstcase.js'],
  specs:['..//testcases//firstcase.js'],
  specs:['..//testcases//secondtestcase.js'],
  specs:['..//testcases//secondtestcase.js'],
  specs:['..//testcases//secondtestcase.js'],

element("xpath").getText().then(function(result){

console.log("printing data value:"+ result);


})


element("xpath").isPresent().then(function(result){

console.log("printing data values:"+result);


})

  browser.actions().mousemove(button).click().perform();

  browser.actions().mousemove(button).click().perform();



if()
else if(){



}
else if(){




}

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

onPrepare: function(){
jasmine.getEnv().addReporter(new HtmlReporter)({

baseDirectory: 'screenshots/reports'



}).getJasmine2Reporter();

OnPrepare: function(){

jasmine.getEnv().addReporter(new HtmlReporter)({

baseDirectory:'screenshots/reports'

}).gerJasmine2Reporter();





OnPrepare: function(){

jasmine.getEnv().addReporter(new HtmlReporter)(

{

baseDirectory:'screenshots/reports'


}.gerJasmine2Reporter();







);



}


}


}

};
onPrepare: function(){

  jasmine.getEnv().addReporter(

     new jasmineReporters.JUnitXmlReporter({




     })





  )
  
  
  
  ;


}
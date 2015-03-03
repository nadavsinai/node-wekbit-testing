var baseFile = __dirname +'/index.html';
exports.config = {
    directConnect:true,
    chromeDriver: './support/chromedriver',
    // Spec patterns are relative to the location of this config.
    onPrepare:function(){
        browser.ignoreSynchronization = true;
        browser.resetUrl = 'file://' + baseFile;
        browser.driver.get('file://'+baseFile);
    },
    onComplete:function(){
        browser.executeScript(function(){
            quit();
        });
    },
    baseUrl:__dirname +'/index.html',
    specs: [
        './tests/e2e/*.spec.js'
    ]
};
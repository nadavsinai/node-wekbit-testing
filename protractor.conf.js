var baseFile = __dirname + '/index.html';
var nwBinary;

switch (process.platform) {
    case 'darwin':
        nwBinary = process.env.PWD + '/node_modules/nw/nwjs/nwjs.app/Contents/MacOS/nwjs';
        break;
    case 'linux':
        nwBinary = process.env.PWD + '/node_modules/nw/bin/nw';
        break;
    case 'win32':
        nwBinary = nwBinary = process.env.PWD + '/node_modules/nw/nwjs/nw.exe';
        break;

}
exports.config = {
    directConnect: true,
    chromeDriver: './support/chromedriver',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // Path to NW.js binary goes here!
            binary: nwBinary
        }
    },
    // Spec patterns are relative to the location of this config.
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.resetUrl = 'file://' + baseFile;
        browser.driver.get('file://' + baseFile);
    },
    onComplete: function () {
    },
    baseUrl: __dirname + '/index.html',
    specs: [
        './tests/e2e/*.spec.js'
    ]
};
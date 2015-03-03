var file = require('./js/file.js');
var gui = require('nw.gui');
gui.Window.get().menu = require('./js/menu.js')(gui);

function clickInput(id) {
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click');
    document.getElementById(id).dispatchEvent(event);
}

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 'O'.charCodeAt(0) && e.ctrlKey) {
        clickInput('open');
    } else if (e.keyCode == 'S'.charCodeAt(0) && e.ctrlKey) {
        clickInput('save');
    } else if (e.keyCode == 'N'.charCodeAt(0) && e.ctrlKey) {
        gui.Window.open('index.html');
    } else if (e.keyCode == 'Q'.charCodeAt(0) && e.ctrlKey) {
        gui.App.quit();
    }
});

document.getElementById('open').addEventListener('change', function (e) {
    file.open(this.value, document);
});

document.getElementById('save').addEventListener('change', function (e) {
    file.save(this.value, document);
});
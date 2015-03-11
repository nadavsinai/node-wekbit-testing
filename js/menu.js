function Menu(gui) {
    var menu = new gui.Menu({type: 'menubar'});
    menu.append(new gui.MenuItem({
        label: 'File',
        submenu: new gui.Menu()
    }));
    menu.items[0].submenu.append(new gui.MenuItem({
        label: 'New',
        click: function () {
            gui.Window.open('index.html');
        }
    }));
    menu.items[0].submenu.append(new gui.MenuItem({
        type: 'separator'
    }));
    menu.items[0].submenu.append(new gui.MenuItem({
        label: 'Close',
        click: function () {
            gui.Window.get().close();
        }
    }));
    if (process.platform === 'darwin'){
        menu.createMacBuiltin("Text Editor");
    }
    return menu;
}
module.exports = Menu;
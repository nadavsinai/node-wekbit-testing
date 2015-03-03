describe('checks textbox functionality', function () {
    beforeEach(function () {
       // browser.get();
    });

    it('editor textarea exists', function () {
        expect(element(by.id('editor')).isDisplayed()).toBeTruthy();
    });
})
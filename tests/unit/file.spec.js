describe('File Helper Tests', function () {
    var file;

    beforeEach(function () {
        file = require('../../js/file.js')
    });

    it('tests that expected functions exist', function () {
        expect(file.open).to.exist;
        expect(file.save).to.exist;
    })
});
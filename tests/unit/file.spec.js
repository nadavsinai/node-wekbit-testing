describe('File Helper Tests', function () {
    var file;

    beforeEach(function () {
        file = require('file.js')
    });

    it('tests that expected functions exist', function () {
        expect(file.open).toBeDefined();
        expect(file.save).toBeDefined();
    });
});

describe("F Number", function() {
    var FNumber= require("../../lib/jasmine_examples/FNumber");
    it("should return space", function() {
        var string = FNumber('hi');
        expect(string).toEqual('hi 1');

    });
    it("should return space", function() {
        var string = FNumber('hello word');
        expect(string).toEqual('hello 1\r\nword 1');

    });
    it("should return space", function() {
        var string = FNumber('love me love my dog');
        expect(string).toEqual('love 2\r\nme 1\r\nmy 1\r\ndog 1');

    });
    it("should return space", function() {
        var string = FNumber('it was the age of wisdom it was the age of foolishness it is');
        expect(string).toEqual('it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1');

    });



});

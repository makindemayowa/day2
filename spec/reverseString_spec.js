var path = require ('../app/reverseString.js');
describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(path.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(path.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(path.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(path.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(path.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(path.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(path.reverseString('misc')).toEqual('csim');
    });

  });

});
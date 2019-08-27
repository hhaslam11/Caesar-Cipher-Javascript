const assert = require('chai').assert;
const encrypt = require('../index');

describe('encrypt()', () => {
  it("encrypts a single letter with a left shift of 3", () => {
    assert.equal(encrypt("e", -3), "b");
  });
  it("characters should wrap around the alphabet", () => {
    assert.equal(encrypt("b", -3), "y");
  });
  it('encrypts the string "hello" to "ebiil" with a left shift of 3', () => {
    assert.equal(encrypt("hello", -3), "ebiil");
  });
  it('encrypts a sentence "hello world" => "mjqqt btwqi", skips spaces (right shift of 5)', () => {
    assert.equal(encrypt("hello world", 5), "mjqqt btwqi");
  });
  it('should return bcd when passed abc, 1', () => {
    assert.strictEqual(encrypt('abc', 1), 'bcd');
  });
  it('should return "def ghi jkl mno" when passed "abc def ghi jkl", 3', () => {
    assert.strictEqual(encrypt('abc def ghi jkl', 3), 'def ghi jkl mno');
  });
  it('should return "abc" when passed "abc" without a key', () => {
    assert.strictEqual(encrypt('abc'), 'abc');
  });
  it('should return undefined when not passed any arguments', () => {
    assert.isUndefined(encrypt());
  });
  it('should return "" when passed empty string with any key', () => {
    assert.strictEqual(encrypt('', 3), '');
  });
});
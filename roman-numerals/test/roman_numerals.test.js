let { RomanNumerals } = require('../src/roman_numerals');

describe('RomanNumerals', function () {
  it('convert number 1 to Roman Numeral', function () {
    let romanNumerals = new RomanNumerals();

    let number = romanNumerals.convert(1);

    expect(number).toBe('I');
  });
});

let { RomanNumerals } = require('../src/roman_numerals');

describe('RomanNumerals', function () {
  it('convert number 1 to Roman Numeral', function () {
    let romanNumerals = new RomanNumerals();

    let number = romanNumerals.convert(1);

    expect(number).toBe('I');
  });

  it('convert number 5 to Roman Numeral', function () {
    let romanNumerals = new RomanNumerals();

    let number = romanNumerals.convert(5);

    expect(number).toBe('V');
  });

  it('convert number 10 to Roman Numeral', function () {
    let romanNumerals = new RomanNumerals();

    let number = romanNumerals.convert(10);

    expect(number).toBe('X');
  });
});

let { RomanNumerals } = require('../src/roman_numerals');

describe('RomanNumerals', function () {
  let romanNumerals;

  beforeEach(() => {
    romanNumerals = new RomanNumerals();
  });

  it('convert number 1 to Roman Numeral', function () {
    let number = romanNumerals.convert(1);

    expect(number).toBe('I');
  });

  it('convert number 5 to Roman Numeral', function () {
    let number = romanNumerals.convert(5);

    expect(number).toBe('V');
  });

  it('convert number 10 to Roman Numeral', function () {
    let number = romanNumerals.convert(10);

    expect(number).toBe('X');
  });

  it('convert number 50 to Roman Numeral', function () {
    let number = romanNumerals.convert(50);

    expect(number).toBe('L');
  });

  it('convert number 100 to Roman Numeral', function () {
    let number = romanNumerals.convert(100);

    expect(number).toBe('C');
  });

  it('convert number 500 to Roman Numeral', function () {
    let number = romanNumerals.convert(500);

    expect(number).toBe('D');
  });

  it('convert number 1000 to Roman Numeral', function () {
    let number = romanNumerals.convert(1000);

    expect(number).toBe('M');
  });

  it('convert number 2 to Roman Numeral', function () {
    let number = romanNumerals.convert(2);

    expect(number).toBe('II');
  });

  it('convert number 3 to Roman Numeral', function () {
    let number = romanNumerals.convert(3);

    expect(number).toBe('III');
  });
});

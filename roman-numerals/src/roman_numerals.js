class RomanNumerals {
  // Concha
  // María
  // Andrea
  convert(number) {
    let romanNumbers = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M',
    };

    if (number === 0) {
      return '';
    }

    if (number >= 1 && number < 5) {
      return romanNumbers[1] + this.convert(number - 1);
    } else if (number >= 5 && number < 10) {
      return romanNumbers[5] + this.convert(number - 5);
    } else if (number >= 10 && number < 50) {
      return romanNumbers[10] + this.convert(number - 10);
    } else if (number >= 50 && number < 100) {
      return romanNumbers[50] + this.convert(number - 50);
    }

    return romanNumbers[number];
  }
}
module.exports.RomanNumerals = RomanNumerals;

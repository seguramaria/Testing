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

    if (number <= 3) {
      let result = '';
      for (let index = 1; index <= number; index++) {
        result = result + romanNumbers[1];
      }
      return result;
    }

    return romanNumbers[number];
  }
}
module.exports.RomanNumerals = RomanNumerals;

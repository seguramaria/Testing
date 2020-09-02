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

    if (number === 2) {
      return romanNumbers[1] + romanNumbers[1];
    } else if (number === 3) {
      return romanNumbers[1] + romanNumbers[1] + romanNumbers[1];
    }

    return romanNumbers[number];
  }
}
module.exports.RomanNumerals = RomanNumerals;

class RomanNumerals {
  // Concha
  // María
  // Andrea
  convert(number) {
    let romanNumbers = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C' };

    return romanNumbers[number];
  }
}
module.exports.RomanNumerals = RomanNumerals;

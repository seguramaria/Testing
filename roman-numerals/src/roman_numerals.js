class RomanNumerals {
  // Concha
  // María
  // Andrea
  convert(number) {
    if (number === 1) {
      return 'I';
    } else {
      return 'V';
    }
  }
}

module.exports.RomanNumerals = RomanNumerals;

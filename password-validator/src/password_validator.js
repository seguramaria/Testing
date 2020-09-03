class PasswordValidator {
  // Concha
  // María
  // Alexandra
  // Andrea

  isValid(password) {
    if (
      password.length > 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[_]/.test(password)
    ) {
      return true;
    }
    return false;
  }
}

module.exports.PasswordValidator = PasswordValidator;

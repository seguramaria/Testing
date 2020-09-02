class PasswordValidator {
  // Alexandra
  // Concha
  // Andrea
  // María

  isValid(password) {
    if (password.length > 8 && /[A-Z]/.test(password)) {
      return true;
    }
    return false;
  }
}

module.exports.PasswordValidator = PasswordValidator;

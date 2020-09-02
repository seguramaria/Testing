let PasswordValidator = require('../src/password_validator').PasswordValidator;

describe('Password validator', function () {
  it('contains one character', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('A');

    expect(isValid).toBe(false);
  });

  it('contains two characters', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('AA');

    expect(isValid).toBe(false);
  });

  it('contains nine characters', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('AAAAAAAAA');

    expect(isValid).toBe(true);
  });

  it('contains at least 1 capital letter', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('aa32assas');

    expect(isValid).toBe(false);
  });
});

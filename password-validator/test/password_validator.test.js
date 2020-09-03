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

    let isValid = passwordValidator.isValid('A3aAAA_AA');

    expect(isValid).toBe(true);
  });

  it('contains at least 1 capital letter', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('aa32assas');

    expect(isValid).toBe(false);
  });

  it('contains at least 1 lowercase', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('AA32ASSAS');

    expect(isValid).toBe(false);
  });
  it('contains at least 1 number', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('Aak_ASSAS');

    expect(isValid).toBe(false);
  });

  it('contains an underscore', function () {
    let passwordValidator = new PasswordValidator();

    let isValid = passwordValidator.isValid('AakA*SAS*9');

    expect(isValid).toBe(false);
  });
});

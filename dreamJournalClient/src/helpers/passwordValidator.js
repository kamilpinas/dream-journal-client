export function passwordValidator(password) {
  if (!password) {
    return 'Hasło nie może być puste';
  }
  if (password.length < 5) {
    return 'Hasło musi mieć minimum 5 znaków';
  }
  return '';
}

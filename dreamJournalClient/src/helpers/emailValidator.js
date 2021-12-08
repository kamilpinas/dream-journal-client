export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return 'Email nie może być pusty';
  }
  if (!re.test(email)) {
    return 'Ooops! Wpisz poprawny adres e-mail';
  }
  return '';
}

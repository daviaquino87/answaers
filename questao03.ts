function validatePassword(password: string): boolean {
  const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\|,.<>/?]).+$/;
  return regexPassword.test(password);
}
console.log(validatePassword("#Su1n2301"))
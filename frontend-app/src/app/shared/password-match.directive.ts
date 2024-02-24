import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordmatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmpassword = control.get('confirmpassword');

  if (!password || !confirmpassword || !password.value || !confirmpassword.value) {
    return null;
  }

  return password.value === confirmpassword.value ? null : { passwordMatch: true };
};

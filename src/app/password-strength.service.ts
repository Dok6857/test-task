import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  passwordStrength: string[] = ['default', 'default', 'default', 'default'];

  getPasswordStrength(password: string): string[] {
    const hasLetters = /[a-zA-Zа-яА-ЯіІїЇ]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Zа-яА-яіІїЇ0-9]/.test(password);

    if (password.length === 0) {
      return ['default', 'default', 'default'];
    } else if (password.length < 8) {
      return ['red', 'red', 'red'];
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return ['green', 'green', 'green'];
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      return ['yellow', 'yellow', 'default'];
    } else {
      return ['red', 'default', 'default'];
    }
  }
}

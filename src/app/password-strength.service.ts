import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {

  getPasswordStrength(password: string): string[] {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (password.length > 0 && password.length < 8) {
        return ['default', 'easy', 'easy', 'easy'];
      } else if (hasLetters && hasNumbers && hasSymbols) {
        return ['default', 'strong', 'strong', 'strong'];
      } else if (
        (hasLetters && hasNumbers) ||
        (hasLetters && hasSymbols) ||
        (hasNumbers && hasSymbols)
      ) {
        return ['default', 'medium', 'medium', 'default'];
      } else {
        return ['default', 'easy', 'default', 'default'];
      }
  }
}

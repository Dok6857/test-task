// app.component.ts
import { Component, inject } from '@angular/core';
import { PasswordInputComponent } from './password-input/password-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, PasswordInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private passwordStrengthService = inject(PasswordStrengthService);

  passwordStrength: string[] = [];

  onPasswordChange(password: string) {
    this.passwordStrength = this.passwordStrengthService.getPasswordStrength(password);
  }
}

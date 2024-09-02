import { Component, Input } from '@angular/core';
import clsx from 'clsx';

@Component({
  selector: 'app-password-bars',
  standalone: true,
  imports: [],
  templateUrl: './password-bars.component.html',
  styleUrl: './password-bars.component.css'
})
export class PasswordBarsComponent {
  @Input() passwordStrength: string[] = [];

  getClassForBar(index: number): string {
    return clsx({
    'default': this.passwordStrength[index] === 'default',
    'red': this.passwordStrength[index] === 'red',
    'yellow': this.passwordStrength[index] === 'yellow',
    'green': this.passwordStrength[index] === 'green',
  })
}
}

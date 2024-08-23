import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-bars',
  standalone: true,
  imports: [],
  templateUrl: './password-bars.component.html',
  styleUrl: './password-bars.component.css'
})
export class PasswordBarsComponent {
  @Input() passwordStrength: string[] = [];
}

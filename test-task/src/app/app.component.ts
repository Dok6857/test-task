import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password: string = '';
  isPasswordVisible = false;
  arrayOfClasses: string[] = ['default', '', '', ''] ;

  onToggleVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onInput() {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(this.password);

    if (this.password.length > 0 && this.password.length < 8) {
      this.arrayOfClasses = ['default', 'easy', 'easy', 'easy']
    } else if (this.password) {

    }

    console.log(this.password.length);
  }
}

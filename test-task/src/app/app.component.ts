import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password: string = '';
  isPasswordVisible = false;

  onToggleVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  onInput(event: Event) {
   const input = event.target as HTMLInputElement;
  //  const hasLetters = /[a-zA-Z]/.test(input)
   console.log(this.password.length);
  }
}

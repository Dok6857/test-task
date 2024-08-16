import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
   const passwordEasy = document.getElementById('p-easy');
   const passwordMedium = document.getElementById('p-medium');
   const passwordStrong= document.getElementById('p-strong');
   
   console.log(input.value);
  }
}

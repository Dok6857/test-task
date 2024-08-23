// password-input.component.ts

import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Output() passwordChange = new EventEmitter<string>();

  isPasswordVisible = false;

  onChange: any = (value: any) => {};
  onTouched: any = () => {};

  passForm = new FormGroup({
    password: new FormControl(''),
  });

  onInput() {
    const password = this.passForm.value.password || '';
    this.passwordChange.emit(password);
  }

  writeValue(value: any): void {
    this.passForm.setValue({ password: value }, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.passForm.valueChanges.subscribe((value) => {
      this.onChange(value.password);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onToggleVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}

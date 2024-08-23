import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordBarsComponent } from './password-bars.component';

describe('PasswordBarsComponent', () => {
  let component: PasswordBarsComponent;
  let fixture: ComponentFixture<PasswordBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordBarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

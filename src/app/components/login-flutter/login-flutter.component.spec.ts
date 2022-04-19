import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFlutterComponent } from './login-flutter.component';

describe('LoginFlutterComponent', () => {
  let component: LoginFlutterComponent;
  let fixture: ComponentFixture<LoginFlutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFlutterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFlutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

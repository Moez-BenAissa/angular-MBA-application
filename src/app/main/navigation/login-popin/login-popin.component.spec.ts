import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopinComponent } from './login-popin.component';

describe('LoginPopinComponent', () => {
  let component: LoginPopinComponent;
  let fixture: ComponentFixture<LoginPopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

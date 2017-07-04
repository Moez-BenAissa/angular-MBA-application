import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangagesPopinComponent } from './langages-popin.component';

describe('LangagesPopinComponent', () => {
  let component: LangagesPopinComponent;
  let fixture: ComponentFixture<LangagesPopinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangagesPopinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangagesPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

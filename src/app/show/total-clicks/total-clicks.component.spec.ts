import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalClicksComponent } from './total-clicks.component';

describe('TotalClicksComponent', () => {
  let component: TotalClicksComponent;
  let fixture: ComponentFixture<TotalClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonUniComponent } from './input-button-uni.component';

describe('InputButtonUniComponent', () => {
  let component: InputButtonUniComponent;
  let fixture: ComponentFixture<InputButtonUniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputButtonUniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtonUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

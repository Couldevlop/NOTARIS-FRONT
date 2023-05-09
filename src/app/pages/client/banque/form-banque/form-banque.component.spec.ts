import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBanqueComponent } from './form-banque.component';

describe('FormBanqueComponent', () => {
  let component: FormBanqueComponent;
  let fixture: ComponentFixture<FormBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

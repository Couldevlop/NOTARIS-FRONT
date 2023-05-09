import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhysiqueComponent } from './form-physique.component';

describe('FormPhysiqueComponent', () => {
  let component: FormPhysiqueComponent;
  let fixture: ComponentFixture<FormPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPhysiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

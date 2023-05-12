import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuvertureCreditComponent } from './ouverture-credit.component';

describe('OuvertureCreditComponent', () => {
  let component: OuvertureCreditComponent;
  let fixture: ComponentFixture<OuvertureCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuvertureCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuvertureCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

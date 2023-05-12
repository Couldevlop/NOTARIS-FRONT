import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionSocieteComponent } from './constitution-societe.component';

describe('ConstitutionSocieteComponent', () => {
  let component: ConstitutionSocieteComponent;
  let fixture: ComponentFixture<ConstitutionSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstitutionSocieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstitutionSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

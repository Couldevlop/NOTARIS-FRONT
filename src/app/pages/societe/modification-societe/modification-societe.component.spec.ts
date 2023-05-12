import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationSocieteComponent } from './modification-societe.component';

describe('ModificationSocieteComponent', () => {
  let component: ModificationSocieteComponent;
  let fixture: ComponentFixture<ModificationSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationSocieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

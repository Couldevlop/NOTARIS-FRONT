import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntrepiseComponent } from './edit-entrepise.component';

describe('EditEntrepiseComponent', () => {
  let component: EditEntrepiseComponent;
  let fixture: ComponentFixture<EditEntrepiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEntrepiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEntrepiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

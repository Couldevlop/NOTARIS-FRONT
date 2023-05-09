import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActeVenteComponent } from './list-acte-vente.component';

describe('ListActeVenteComponent', () => {
  let component: ListActeVenteComponent;
  let fixture: ComponentFixture<ListActeVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActeVenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActeVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

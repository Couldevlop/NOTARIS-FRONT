import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActeimmoComponent } from './list-acteimmo.component';

describe('ListActeimmoComponent', () => {
  let component: ListActeimmoComponent;
  let fixture: ComponentFixture<ListActeimmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActeimmoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActeimmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

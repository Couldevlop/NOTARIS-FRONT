import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientPhysiqueComponent } from './list-client-physique.component';

describe('ListClientPhysiqueComponent', () => {
  let component: ListClientPhysiqueComponent;
  let fixture: ComponentFixture<ListClientPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientPhysiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClientPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

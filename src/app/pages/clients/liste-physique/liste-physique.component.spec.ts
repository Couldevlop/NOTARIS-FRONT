import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePhysiqueComponent } from './liste-physique.component';

describe('ListePhysiqueComponent', () => {
  let component: ListePhysiqueComponent;
  let fixture: ComponentFixture<ListePhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePhysiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

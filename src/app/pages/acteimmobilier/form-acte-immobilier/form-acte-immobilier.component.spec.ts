import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ActeImmobilierComponent } from "./form-acte-immobilier.component";

describe("ActeImmobilierComponent", () => {
  let component: ActeImmobilierComponent;
  let fixture: ComponentFixture<ActeImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActeImmobilierComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActeImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

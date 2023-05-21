import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-acte-immobilier",
  templateUrl: "./form-acte-immobilier.component.html",
  styleUrls: ["./form-acte-immobilier.component.scss"],
})
export class ActeImmobilierComponent implements OnInit {
  formActeImmo = this.fb.group({
    intitule: ["", Validators.required],
    acquereur: ["", Validators.required],
    vendeur: ["", Validators.required],
    typeActeImmo: ["", Validators.required],
    mandataire: ["", Validators.required],
    commentaire: ["", Validators.required],
    documents: ["", Validators.required],
  });

  // bread crum data
  breadCrumbItems: Array<{}>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Acte Immobilier" },
      { label: "Liste des actes immobiliers", active: true },
    ];
  }

  submit() {}
}

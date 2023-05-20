import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MoralServiceService } from "src/app/services/moral-service.service";

@Component({
  selector: "app-entreprise",
  templateUrl: "./entreprise.component.html",
  styleUrls: ["./entreprise.component.scss"],
})
export class EntrepriseComponent implements OnInit {
  entrepriseForm = this.fb.group({
    adresse: this.fb.group({
      adresse1: ["", Validators.required],
      adresse2: ["", Validators.required],
      codePostal: ["", Validators.required],
      pays: ["", Validators.required],
      ville: ["", Validators.required],
    }),

    raisonSociale: ["", Validators.required],
    nature: ["", Validators.required],
    email: ["", Validators.required],
    sigle: ["", Validators.required],
    activite: ["", Validators.required],
    numRCCM: ["", Validators.required],
    dfe: ["", Validators.required],
    logo: ["", Validators.required],
    fixe: ["", Validators.required],
    fax: ["", Validators.required],
    representantLegal: ["", Validators.required],
    numPieceDirigeant: ["", Validators.required],
    localisation: ["", Validators.required],
  });

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(
    private fb: FormBuilder,
    private service: MoralServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Entreprise" },
      { label: "Formulaire entreprise", active: true },
    ];
  }

  submit() {
    console.log(this.entrepriseForm.value);
    this.service.create(this.entrepriseForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(["liste-entreprise"]);
      },
    });
  }
}

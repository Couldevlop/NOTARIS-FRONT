import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Physique } from "src/app/models/clients/Physique";
import { PhysiqueServiceService } from "src/app/services/physique-service.service";

@Component({
  selector: "app-physique",
  templateUrl: "./physique.component.html",
  styleUrls: ["./physique.component.scss"],
})
export class PhysiqueComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  data: Physique;

  physiqueForm = this.fb.group({
    nom: ["", Validators.required],

    prenom: ["", Validators.required],

    mobile: ["", Validators.required],

    fixe: ["", Validators.required],

    email: ["", Validators.required],

    adresse: this.fb.group({
      adresse1: ["", Validators.required],
      adresse2: ["", Validators.required],
      codePostal: ["", Validators.required],
      pays: ["", Validators.required],
      ville: ["", Validators.required],
    }),

    profession: ["", Validators.required],

    lieuDeTravail: ["", Validators.required],

    dateNaissance: ["", Validators.required],

    photo: ["", Validators.required],

    situationMatrimoniale: ["", Validators.required],
  });

  constructor(
    private service: PhysiqueServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Client physique" },
      { label: "Formulaire du client physique", active: true },
    ];
  }

  submit() {
    this.service.save(this.physiqueForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
    console.log(JSON.stringify(this.physiqueForm.value));
    this.router.navigate(["/liste-banque"]);
    //console.log(this.physiqueForm.value);
  }
}

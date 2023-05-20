import { Component, Input } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Moral } from "src/app/models/clients/Moral";
import { MoralServiceService } from "src/app/services/moral-service.service";

@Component({
  selector: "app-edit-entrepise",
  templateUrl: "./edit-entrepise.component.html",
  styleUrls: ["./edit-entrepise.component.scss"],
})
export class EditEntrepiseComponent {
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
  id: number;
  entreprise: Moral;

  constructor(
    private fb: FormBuilder,
    private service: MoralServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Entreprise" },
      { label: "Formulaire entreprise", active: true },
    ];
    this.getEntrepriseId();
  }

  submit() {
    console.log(this.entrepriseForm.value);
    this.service.create(this.entrepriseForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(["/liste-entreprise"]);
      },
    });
  }

  getEntrepriseId(): void {
    this.id = this.route.snapshot.params["index"];
    console.log("iiiiiiiiiiiiiiiiiiiiii" + this.id);
    this.id = Number(this.id);
    this.service.findById(this.id).subscribe({
      next: (res) => {
        this.entreprise = res;
        console.log(this.entreprise);
      },
    });
  }
}

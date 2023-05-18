import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Banque } from "src/app/models/clients/Banque";
import { BanqueServiceService } from "src/app/services/banque-service.service";
import { DocumentServiceService } from "src/app/services/document-service.service";

@Component({
  selector: "app-banque",
  templateUrl: "./banque.component.html",
  styleUrls: ["./banque.component.scss"],
})
export class BanqueComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  public banque?: Banque;
  public nature: any = [""];
  selectedFile?: any;

  constructor(
    private fb: FormBuilder,
    private service: BanqueServiceService,
    private router: Router,
    private docservice: DocumentServiceService
  ) {}

  allFiles: File[] = [];
  droppedFiles(allFiles: File[]): void {
    const filesAmount = allFiles.length;
    for (let i = 0; i < filesAmount; i++) {
      const file = allFiles[i];
      this.allFiles.push(file);
    }
  }

  banqueForm = this.fb.group({
    sigle: ["", Validators.required],
    raisonSociale: ["", Validators.required],
    numRCCM: ["", Validators.required],
    dfe: ["", Validators.required],
    logo: ["", Validators.required],
    fixe: ["", Validators.required],
    fax: ["", Validators.required],
    nomDirigeant: ["", Validators.required],
    adresse: this.fb.group({
      adresse1: ["", Validators.required],
      adresse2: ["", Validators.required],
      codePostal: ["", Validators.required],
      pays: ["", Validators.required],
      ville: ["", Validators.required],
    }),
  });

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Banque" },
      { label: "Formulaire de banque", active: true },
    ];
  }

  submit() {
    this.service.create(this.banqueForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
    console.log(JSON.stringify(this.banqueForm.value));
    //this.router.navigate(["/liste-banque"]);
  }

  selectFile(event: any): void {
    this.selectedFile = event.target.files;
  }
}

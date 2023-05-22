import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ActeImmo } from "src/app/models/dossiers/ActeImmo";
import { ActeImmoServiceService } from "src/app/services/acte-immo-service.service";
import { DocumentServiceService } from "src/app/services/document-service.service";

@Component({
  selector: "app-form-document",
  templateUrl: "./form-document.component.html",
  styleUrls: ["./form-document.component.scss"],
})
export class FormDocumentComponent implements OnInit {
  formDoc = this.fb.group({
    intitule: ["", Validators.required],
    docName: [""],
    docType: [""],
    data: [""],
    typeDoc: ["", Validators.required],
    acteImmo: [""],
    file: [""],
  });

  // bread crum data
  breadCrumbItems: Array<{}>;

  data: any;
  file: File;
  id: any;
  acteimmo: ActeImmo;

  constructor(
    private fb: FormBuilder,
    private docService: DocumentServiceService,
    private route: ActivatedRoute,
    private service: ActeImmoServiceService
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Ajout de document d'un acte immobilier" },
      { label: "Liste des documents d'un acte immobilier", active: true },
    ];
    this.getActeImmoId();
  }

  submit() {
    this.data = this.formDoc.valid;
    console.log(this.formDoc.value);
    //this.docService.saveFile()
  }

  getActeImmoId(): void {
    this.id = this.route.snapshot.params["index"];
    console.log("iiiiiiiiiiiiiiiiiiiiii" + this.id);
    this.id = Number(this.id);
    this.service.findById(this.id).subscribe({
      next: (res) => {
        this.acteimmo = res;
        console.log(this.acteimmo);
      },
    });
  }

  /*  updateActeImmo(acteimmo: ActeImmo, doc: File){
     let document = new Document();
       document. = this.file.type;
       document. = this.file.name;
       document. = this.file.;
     
  } */
}

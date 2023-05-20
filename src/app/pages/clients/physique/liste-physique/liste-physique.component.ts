import { Component, OnInit } from "@angular/core";
import { Physique } from "src/app/models/clients/Physique";
import { PhysiqueServiceService } from "src/app/services/physique-service.service";

@Component({
  selector: "app-liste-physique",
  templateUrl: "./liste-physique.component.html",
  styleUrls: ["./liste-physique.component.scss"],
})
export class ListePhysiqueComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(private service: PhysiqueServiceService) {}
  physique: Physique[];

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Physique" },
      { label: "Liste des clients Physiques", active: true },
    ];
    this.loadData();
  }

  loadData() {
    this.service.findAll().subscribe({
      next: (res) => (this.physique = res),
    });
  }
}

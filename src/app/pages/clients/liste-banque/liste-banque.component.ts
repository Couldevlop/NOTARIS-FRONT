import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { BanqueServiceService } from "src/app/services/banque-service.service";
import { Banque } from "src/app/models/clients/Banque";

@Component({
  selector: "app-liste-banque",
  templateUrl: "./liste-banque.component.html",
  styleUrls: ["./liste-banque.component.scss"],
})
export class ListeBanqueComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  liste;

  banque: Banque[];
  constructor(
    private dataService: DataService,
    private service: BanqueServiceService
  ) {}

  ngOnInit() {
    this.liste = this.dataService.listeBanque;
    this.breadCrumbItems = [
      { label: "Banque" },
      { label: "Liste des banques", active: true },
    ];
    this.loadData();
  }

  loadData() {
    this.service.findAll().subscribe({
      next: (res) => {
        this.banque = res;
        console.log(this.banque);
      },
    });
  }
}

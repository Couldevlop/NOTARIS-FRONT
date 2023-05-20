import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MoralServiceService } from "src/app/services/moral-service.service";
import { Moral } from "src/app/models/clients/Moral";
import { number } from "echarts";

@Component({
  selector: "app-liste-entreprise",
  templateUrl: "./liste-entreprise.component.html",
  styleUrls: ["./liste-entreprise.component.scss"],
})
export class ListeEntrepriseComponent implements OnInit {
  entreprise: Moral[];
  sigleEntreprise: any;
  currentEntreprise: Moral;
  currentIndex = -1;
  breadCrumbItems: Array<{}>;

  constructor(private service: MoralServiceService, private router: Router) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Entreprise" },
      { label: "Liste des clients entreprise", active: true },
    ];
    this.loadData();
  }

  loadData() {
    this.service.findAll().subscribe({
      next: (res) => {
        (this.entreprise = res), console.log(this.entreprise);
      },
    });
  }

  updateEntrepise(id: any) {
    id = Number(id);
    this.service.findById(id).subscribe({
      next: (res) => {
        this.sigleEntreprise = res;
        this.router.navigate(["edit-entreprise/" + id]);
      },
    });
  }

  deleteEntreprise(id: number) {
    id = Number(id);
    this.service.deleteById(id);
    console.log("élement supprimer avec succès");
  }
}

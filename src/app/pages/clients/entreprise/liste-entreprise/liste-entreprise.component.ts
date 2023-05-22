import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
import { MoralServiceService } from "src/app/services/moral-service.service";

import {
  AdvancedSortableDirective,
  SortEvent,
} from "src/app/models/advanced-sortable.directive";
import { Observable } from "rxjs";
import { Table } from "src/app/models/advanced.model";

import { DecimalPipe } from "@angular/common";
import { Moral } from "src/app/models/clients/Moral";
import { tableData } from "src/app/models/data";
import { AdvancedService } from "src/app/pages/tables/advancedtable/advanced.service";

@Component({
  selector: "app-liste-entreprise",
  templateUrl: "./liste-entreprise.component.html",
  styleUrls: ["./liste-entreprise.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class ListeEntrepriseComponent implements OnInit {
  constructor(
    private service: MoralServiceService,
    private router: Router,
    public service1: AdvancedService
  ) {
    this.tables$ = service1.tables$;
    this.total$ = service1.total$;
  }

  entreprise: Moral[];
  sigleEntreprise: any;
  currentEntreprise: Moral;
  currentIndex = -1;

  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(AdvancedSortableDirective)
  headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Client physique" },
      { label: "Liste des clients physique", active: true },
    ];
    /**
     * fetch data
     */
    this._fetchData();

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

  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: any) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service1.sortColumn = column;
    this.service1.sortDirection = direction;
  }
}

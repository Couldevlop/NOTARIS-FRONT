import { DecimalPipe } from "@angular/common";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AdvancedSortableDirective } from "src/app/models/advanced-sortable.directive";
import { Table } from "src/app/models/advanced.model";
import { tableData } from "src/app/models/data";
import { ActeImmo } from "src/app/models/dossiers/ActeImmo";
import { AdvancedService } from "src/app/pages/tables/advancedtable/advanced.service";
import { ActeImmoServiceService } from "src/app/services/acte-immo-service.service";

@Component({
  selector: "app-list-acteimmo",
  templateUrl: "./list-acteimmo.component.html",
  styleUrls: ["./list-acteimmo.component.scss"],
  providers: [AdvancedService, DecimalPipe],
})
export class ListActeimmoComponent {
  constructor(
    private service: ActeImmoServiceService,
    private router: Router,
    public service1: AdvancedService
  ) {
    this.tables$ = service1.tables$;
    this.total$ = service1.total$;
  }

  acteimmo: ActeImmo[];
  sigleActeImmo: any;
  // currentEntreprise: Moral;
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
        (this.acteimmo = res), console.log(this.acteimmo);
      },
    });
  }

  updateEntrepise(id: any) {
    id = Number(id);
    this.service.findById(id).subscribe({
      next: (res) => {
        this.sigleActeImmo = res;
        this.router.navigate(["edit-acteimmo/" + id]);
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

import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { BanqueServiceService } from "src/app/services/banque-service.service";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
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
  modalRef?: BsModalRef;

  banque: Banque[];

  constructor(
    private dataService: DataService,
    private service: BanqueServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Banque" },
      { label: "Liste des banques", active: true },
    ];
    this.loadData();
  }

  loadData() {
    this.service.findAll().subscribe({
      next: (res) => (this.banque = res),
    });
  }

  /**
   * Open scroll modal
   * @param toggleDataModal scroll modal data
   */
  toggleModal(staticDataModal: any) {
    this.modalRef = this.modalService.show(staticDataModal);
  }

  /**
   * Open modal
   * @param content modal content
   */
  MaryModal(content: any) {
    this.modalService.show(content);
  }
}

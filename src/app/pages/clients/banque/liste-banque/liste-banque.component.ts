import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-liste-banque',
  templateUrl: './liste-banque.component.html',
  styleUrls: ['./liste-banque.component.scss']
})
export class ListeBanqueComponent implements  OnInit {

  // bread crum data
  breadCrumbItems: Array<{}>;
liste;
constructor( private dataService:DataService){}

  ngOnInit() {
    this.liste = this.dataService.listeBanque;
    this.breadCrumbItems = [{ label: 'Banque' }, { label: 'Liste des banques', active: true }];

  }

}

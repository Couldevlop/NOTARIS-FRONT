import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physique',
  templateUrl: './physique.component.html',
  styleUrls: ['./physique.component.scss']
})
export class PhysiqueComponent implements OnInit {
// bread crumb items
breadCrumbItems: Array<{}>;

constructor() { }

ngOnInit() {
  this.breadCrumbItems = [{ label: 'Client physique' }, { label: 'Formulaire du client physique', active: true }];
}
}

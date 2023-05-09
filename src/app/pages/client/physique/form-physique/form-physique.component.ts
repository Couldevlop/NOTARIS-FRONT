import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-physique',
  templateUrl: './form-physique.component.html',
  styleUrls: ['./form-physique.component.scss']
})
export class FormPhysiqueComponent implements OnInit {
// bread crumb items
breadCrumbItems: Array<{}>;

constructor() { }

ngOnInit() {
  this.breadCrumbItems = [{ label: 'Client physique' }, { label: 'Formulaire du client physique', active: true }];
}
}

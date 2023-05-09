import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-entreprise',
  templateUrl: './form-entreprise.component.html',
  styleUrls: ['./form-entreprise.component.scss']
})
export class FormEntrepriseComponent implements OnInit {
  // bread crumb items
breadCrumbItems: Array<{}>;

constructor() { }

ngOnInit() {
  this.breadCrumbItems = [{ label: 'Entreprise' }, { label: 'Formulaire entreprise', active: true }];

}
 }

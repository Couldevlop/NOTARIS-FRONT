import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-banque',
  templateUrl: './form-banque.component.html',
  styleUrls: ['./form-banque.component.scss']
})
export class FormBanqueComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Banque' }, { label: 'Formulaire de banque', active: true }];

  }
   }


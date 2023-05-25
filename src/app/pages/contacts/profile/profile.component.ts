import { Component, OnInit } from "@angular/core";

import { revenueBarChart, statData } from "./data";

import { ChartType } from "./profile.model";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { User } from "src/app/core/models/auth.models";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})

/**
 * Contacts-profile component
 */
export class ProfileComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  user: User;

  revenueBarChart: ChartType;
  statData;
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Contacts" },
      { label: "Profile", active: true },
    ];
    this.userData();
    // fetches the data
    this._fetchData();
  }

  /**
   * Fetches the data
   */
  private _fetchData() {
    this.revenueBarChart = revenueBarChart;
    this.statData = statData;
  }

  userData() {
    this.user = this.auth.currentUser();
    console.log(this.user);
  }
}

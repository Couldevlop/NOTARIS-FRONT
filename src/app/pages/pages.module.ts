import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";

import { NgApexchartsModule } from "ng-apexcharts";
import { FullCalendarModule } from "@fullcalendar/angular";
import { SimplebarAngularModule } from "simplebar-angular";
import { LightboxModule } from "ngx-lightbox";

import { WidgetModule } from "../shared/widget/widget.module";
import { UIModule } from "../shared/ui/ui.module";

// Emoji Picker
import { PickerModule } from "@ctrl/ngx-emoji-mart";

import { PagesRoutingModule } from "./pages-routing.module";

import { DashboardsModule } from "./dashboards/dashboards.module";
import { ContactsModule } from "./contacts/contacts.module";
import { BlogModule } from "./blog/blog.module";
import { UtilityModule } from "./utility/utility.module";
import { UiModule } from "./ui/ui.module";
import { FormModule } from "./form/form.module";
import { TablesModule } from "./tables/tables.module";
import { ChartModule } from "./chart/chart.module";
import { CalendarComponent } from "./calendar/calendar.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { FilemanagerComponent } from "./filemanager/filemanager.component";
//import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { PhysiqueComponent } from "./clients/physique/form-physique/physique.component";
import { BanqueComponent } from "./clients/banque/form-banque/banque.component";
import { EntrepriseComponent } from "./clients/entreprise/form-entreprise/entreprise.component";

import { ActeImmobilierComponent } from "./acteimmobilier/form-acte-immobilier/form-acte-immobilier.component";
import { FicheReceptionComponent } from "./fichereception/fiche-reception/fiche-reception.component";
import { ListeBanqueComponent } from "./clients/banque/liste-banque/liste-banque.component";
import { DataService } from "./clients/banque/liste-banque/data.service";
import { ListePhysiqueComponent } from "./clients/physique/liste-physique/liste-physique.component";
import { ListeEntrepriseComponent } from "./clients/entreprise/liste-entreprise/liste-entreprise.component";
import { EditEntrepiseComponent } from "./clients/entreprise/edit-entreprise/edit-entrepise.component";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { ListActeimmoComponent } from "./acteimmobilier/list-acteimmo/list-acteimmo.component";
import { FormDocumentComponent } from './document/form-document/form-document.component';
import { ListeDocumentComponent } from './document/liste-document/liste-document.component';

@NgModule({
  declarations: [
    CalendarComponent,
    FilemanagerComponent,
    PhysiqueComponent,
    BanqueComponent,
    EntrepriseComponent,
    ActeImmobilierComponent,
    FicheReceptionComponent,
    ListeBanqueComponent,
    ListePhysiqueComponent,
    ListeEntrepriseComponent,
    EditEntrepiseComponent,
    ListActeimmoComponent,
    FormDocumentComponent,
    ListeDocumentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PagesRoutingModule,
    PaginationModule.forRoot(),
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    HttpClientModule,
    UIModule,
    ContactsModule,
    BlogModule,
    UtilityModule,
    UiModule,
    FormModule,
    TablesModule,
    ChartModule,
    WidgetModule,
    FullCalendarModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    SimplebarAngularModule,
    LightboxModule,
    PickerModule,
  ],
  providers: [DataService],
})
export class PagesModule {}

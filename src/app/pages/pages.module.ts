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
import { EcommerceModule } from "./ecommerce/ecommerce.module";
import { CryptoModule } from "./crypto/crypto.module";
import { EmailModule } from "./email/email.module";
import { InvoicesModule } from "./invoices/invoices.module";
import { ProjectsModule } from "./projects/projects.module";
import { TasksModule } from "./tasks/tasks.module";
import { ContactsModule } from "./contacts/contacts.module";
import { BlogModule } from "./blog/blog.module";
import { UtilityModule } from "./utility/utility.module";
import { UiModule } from "./ui/ui.module";
import { FormModule } from "./form/form.module";
import { TablesModule } from "./tables/tables.module";
import { IconsModule } from "./icons/icons.module";
import { ChartModule } from "./chart/chart.module";
import { CalendarComponent } from "./calendar/calendar.component";
import { MapsModule } from "./maps/maps.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ChatComponent } from "./chat/chat.component";

import { FilemanagerComponent } from "./filemanager/filemanager.component";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { PhysiqueComponent } from "./clients/physique/physique.component";
import { BanqueComponent } from "./clients/banque/banque.component";
import { EntrepriseComponent } from "./clients/entreprise/entreprise.component";
import { SuccessionComponent } from "./liquidation/succession/succession.component";
import { CommunauteComponent } from "./liquidation/communaute/communaute.component";
import { ConstitutionSocieteComponent } from "./societe/constitution-societe/constitution-societe.component";
import { ModificationSocieteComponent } from "./societe/modification-societe/modification-societe.component";
import { OuvertureCreditComponent } from "./ouvertcredit/ouverture-credit/ouverture-credit.component";
import { ActeImmobilierComponent } from "./acteimmobilier/acte-immobilier/acte-immobilier.component";
import { FicheReceptionComponent } from "./fichereception/fiche-reception/fiche-reception.component";

@NgModule({
  declarations: [
    CalendarComponent,
    ChatComponent,
    FilemanagerComponent,
    PhysiqueComponent,
    BanqueComponent,
    EntrepriseComponent,
    SuccessionComponent,
    CommunauteComponent,
    ConstitutionSocieteComponent,
    ModificationSocieteComponent,
    OuvertureCreditComponent,
    ActeImmobilierComponent,
    FicheReceptionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    CryptoModule,
    EcommerceModule,
    EmailModule,
    InvoicesModule,
    HttpClientModule,
    ProjectsModule,
    UIModule,
    TasksModule,
    ContactsModule,
    BlogModule,
    UtilityModule,
    UiModule,
    FormModule,
    TablesModule,
    IconsModule,
    ChartModule,
    WidgetModule,
    MapsModule,
    FullCalendarModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    SimplebarAngularModule,
    LightboxModule,
    PickerModule,
  ],
})
export class PagesModule {}

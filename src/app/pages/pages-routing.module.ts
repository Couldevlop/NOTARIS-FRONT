import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { DefaultComponent } from "./dashboards/default/default.component";
import { FilemanagerComponent } from "./filemanager/filemanager.component";
import { PhysiqueComponent } from "./clients/physique/form-physique/physique.component";
import { EntrepriseComponent } from "./clients/entreprise/form-entreprise/entreprise.component";
import { BanqueComponent } from "./clients/banque/form-banque/banque.component";
import { ListeBanqueComponent } from "./clients/banque/liste-banque/liste-banque.component";
import { ActeImmobilierComponent } from "./acteimmobilier/form-acte-immobilier/form-acte-immobilier.component";
import { FicheReceptionComponent } from "./fichereception/fiche-reception/fiche-reception.component";
import { ListePhysiqueComponent } from "./clients/physique/liste-physique/liste-physique.component";
import { ListeEntrepriseComponent } from "./clients/entreprise/liste-entreprise/liste-entreprise.component";
import { EditEntrepiseComponent } from "./clients/entreprise/edit-entreprise/edit-entrepise.component";
import { ListActeimmoComponent } from "./acteimmobilier/list-acteimmo/list-acteimmo.component";
import { FormDocumentComponent } from "./document/form-document/form-document.component";
import { ListeDocumentComponent } from "./document/liste-document/liste-document.component";
const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent,
  },
  { path: "form-physique", component: PhysiqueComponent },
  { path: "edit-entreprise/:index", component: EditEntrepiseComponent },
  { path: "form-entreprise", component: EntrepriseComponent },
  { path: "form-banque", component: BanqueComponent },
  { path: "form-document/:index", component: FormDocumentComponent },
  { path: "liste-document", component: ListeDocumentComponent },
  { path: "liste-banque", component: ListeBanqueComponent },
  { path: "liste-acteimmo", component: ListActeimmoComponent },
  { path: "acte-immobilier", component: ActeImmobilierComponent },
  { path: "fiche-reception", component: FicheReceptionComponent },
  { path: "dashboard", component: DefaultComponent },
  { path: "calendar", component: CalendarComponent },

  { path: "filemanager", component: FilemanagerComponent },
  { path: "liste-physique", component: ListePhysiqueComponent },
  { path: "liste-entreprise", component: ListeEntrepriseComponent },
  {
    path: "dashboards",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },

  {
    path: "contacts",
    loadChildren: () =>
      import("./contacts/contacts.module").then((m) => m.ContactsModule),
  },
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then((m) => m.BlogModule),
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./utility/utility.module").then((m) => m.UtilityModule),
  },
  {
    path: "ui",
    loadChildren: () => import("./ui/ui.module").then((m) => m.UiModule),
  },
  {
    path: "form",
    loadChildren: () => import("./form/form.module").then((m) => m.FormModule),
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./tables/tables.module").then((m) => m.TablesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

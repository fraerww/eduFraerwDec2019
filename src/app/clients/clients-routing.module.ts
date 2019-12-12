import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const routes: Routes = [
  { path: '', component: PageClientsComponent,
  data: { title: 'Clients', subtitle: 'Ajouter un client' } },
  { path: 'add', component: PageAddClientComponent,
  data: { title: 'Clients', subtitle: 'Ajouter un client' } }
 ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClientsRoutingModule { }

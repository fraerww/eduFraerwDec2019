import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';


@NgModule({
  declarations: [PageClientsComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    SharedModule
  ]
})
export class ClientsModule { }

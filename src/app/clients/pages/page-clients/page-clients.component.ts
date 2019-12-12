import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Observable } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public collection: Client[];

  public title: string;
  public subtitle: string;
  public headers = ['Id', 'Name', 'Email', 'State'] ;
  public states = StateClient;

  public route: string;
  public label: string;

  constructor(private cs: ClientsService) {


   }

  ngOnInit() {
    this.title = 'Liste Clients';
    this.subtitle = 'Clients xxx';
    this.collection$ = this.cs.collection;
    this.route = 'add';
    this.label = 'Add new Client';

  }

  public changeState(item: Client, event){

    this.cs.update(item, event.target.value).subscribe((res: Client) => {
      // res étant la réponse de l'api.
      item.state = res.state; //update coté front.
    });
  }

}

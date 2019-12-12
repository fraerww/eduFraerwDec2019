import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public collection: Prestation[];
  public headers = ['Type', 'Client', 'NbJours', 'TjmHT', 'TotalHT', 'TotalTTC', 'State'] ;
  // public states = Object.values(State);
  public states = State;
  public title: string;
  public subtitle: string;
  public route: string;
  public label: string;
  public action: string;

  constructor(private ps: PrestationsService) { }

public changeState(item: Prestation, event ) {

  //console.log(item, event.target.value);

  this.ps.update(item, event.target.value).subscribe((res: Prestation) => {
    // res étant la réponse de l'api.
    item.state = res.state; //update coté front.
  });
}

  ngOnInit() {
    this.ps.collection.subscribe((col) => {
      this.collection = col;
      console.log(this.collection);
    });
    this.title = "Presta";
    this.subtitle = "Sous Presta";
    this.route = 'add';
    this.label = 'Ajouter une prestation';
    this.action = 'Open Pop IN';

  }

  public popIn() {
    console.log('-- Generate pop in with a service ');
  }

}

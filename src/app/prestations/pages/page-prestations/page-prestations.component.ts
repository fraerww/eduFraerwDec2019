import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection$: Observable<Prestation[]>;
  public collection: Prestation[];
  constructor(private ps: PrestationsService) { }

  ngOnInit() {
    this.ps.collection.subscribe((col) => {
      this.collection = col;
      console.log(this.collection);
    });
  }

}

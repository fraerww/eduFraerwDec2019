import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Prestation } from 'src/app/shared/models/prestation';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';

// Initialise au démarrage de l'appli. Le service provient d'un module à chargeer avant
@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private collection$: Observable<any>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations`).pipe(
      map((tab) => {
          return tab.map((obj) => {
            return new Prestation(obj);
          });
      })
    );
    console.log(this.collection);
  }

  // get c
  public get collection(): Observable<any> {
    return this.collection$;
  }
  // set
  public set collection(col: Observable<any>) {
    this.collection$ = col;
  }
  // add Item in c
  // update item in c
  // delete item
  // get item by id



// update itemNikki in collection
public update(itemNikki: Prestation, state: State): Observable<any> {
  const obj = {...itemNikki};
  obj.state = state;
  return this.http.patch(`${this.urlApi}prestations/${obj.id}`, obj);
}

}

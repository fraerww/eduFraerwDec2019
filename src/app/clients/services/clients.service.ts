import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from 'src/app/shared/models/client';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$: Observable<any>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map((tab) => {
          return tab.map((obj) => {
            return new Client(obj);
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


// update itemNikki in collection
public update(itemNikki: Client, state: StateClient): Observable<any> {
  const obj = {...itemNikki};
  obj.state = state;
  return this.http.patch(`${this.urlApi}clients/${obj.id}`, obj);
}

}

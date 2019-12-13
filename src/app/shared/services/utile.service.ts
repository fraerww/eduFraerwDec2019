import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  public util = 1;

  heart$ = new BehaviorSubject(1);
  tab$ = new BehaviorSubject<number[]>([1]);
  constructor() { }

  public utilUpgrade() {
    this.util++;
  }

  public upgrade(){
    this.heart$.next(this.heart$.value + 1);  // derniere valeur static stocké par mon behavior subj.
    this.tab$.next([...this.tab$.value, 1]);
//    this.tab$.subscribe((data) => {
//        data.push(1);
//    });
  }
}

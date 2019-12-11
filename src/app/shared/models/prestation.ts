import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';


export class Prestation implements PrestationI {
  id: number;
  typePresta: string;
  client: string;
  nbJours = 1;
  tva = 20;
  tjmHt = 1200;
  state: State.OPTION;
  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }

  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    return this.totalHt() * (1 + this.tva / 100);
  }


}

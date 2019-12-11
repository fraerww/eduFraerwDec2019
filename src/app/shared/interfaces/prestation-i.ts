import { State } from '../enums/state.enum';

export interface PrestationI {
  id: number;
  typePresta: string;
  client: string;
  nbJours: number;
  tva: number;
  tjmHt: number;
  state: State;
  totalHt(): number;
  totalTtc(): number;
}

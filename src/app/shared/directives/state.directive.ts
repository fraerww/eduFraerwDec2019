import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;

  @HostBinding('class') hostClass: string;
  constructor() {
  }
  ngOnChanges() {
    // console.log(this.appState);
    this.hostClass = this.formatClass(this.appState);
  }
  private formatClass(state): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}

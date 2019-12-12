import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';


@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = State;
  public form: FormGroup;
  @Input() init = new Prestation();
  @Output() ItemBcpNikki: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
//    this.form.valueChanges.subscribe((data) => {
//      console.log(data);
//    }
//    );
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      tjmHt: [this.init.tjmHt],
      state: [this.init.state]
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.ItemBcpNikki.emit(this.form.value);
  }
}

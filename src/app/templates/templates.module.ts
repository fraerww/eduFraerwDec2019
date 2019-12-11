import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateBComponent } from './components/template-b/template-b.component';
import { TemplateAComponent } from './components/template-a/template-a.component';



@NgModule({
  declarations: [TemplateBComponent, TemplateAComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateBComponent, TemplateAComponent]
})
export class TemplatesModule { }

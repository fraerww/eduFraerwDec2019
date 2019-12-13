import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditComponent } from './pages/page-edit/page-edit.component';

const routes: Routes = [
  { path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', subtitle: 'Toutes les prestations' } // Eviter ici pour internationalisation par ex.
   },
   { path: 'add',
   component: PageAddPrestationComponent,
   data: { title: 'Prestations', subtitle: 'Ajouter une prestation' } // Eviter ici pour internationalisation par ex.
  },
  { path: 'edit/:id',
  component: PageEditComponent,
  data: { title: 'Prestation', subtitle: 'Edit d une prestation' }
 }


 ];

@NgModule({
  imports: [ RouterModule.forChild(routes)
  ]
})
export class PrestationsRoutingModule { }

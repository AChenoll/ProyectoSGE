import { NgModule } from '@angular/core';

import { DeleteUnidadCentroComponent } from './delete-unidad-centro.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[{path:'', component: DeleteUnidadCentroComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteUnidadCentroRoutingModule { }

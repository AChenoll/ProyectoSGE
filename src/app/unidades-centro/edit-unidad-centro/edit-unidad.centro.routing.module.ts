import { NgModule } from '@angular/core';

import { EditUnidadCentroComponent } from './edit-unidad-centro.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[{path:'', component: EditUnidadCentroComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditUnidadCentroRoutingModule { }

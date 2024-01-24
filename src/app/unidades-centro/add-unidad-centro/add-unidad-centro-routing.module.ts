import { NgModule } from '@angular/core';

import { AddUnidadCentroComponent } from './add-unidad-centro.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[{path:'', component: AddUnidadCentroComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUnidadCentroRoutingModule { }

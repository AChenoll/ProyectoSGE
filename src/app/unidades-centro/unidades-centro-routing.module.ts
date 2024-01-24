import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UnidadesCentroComponent } from './unidades-centro.component';

const routes: Routes = [
  { path: '', component: UnidadesCentroComponent },
  {
    path: 'add-unidad-centro',
    loadChildren: () => import('./add-unidad-centro/add-unidad-centro.module').then(m => m.AddUnidadCentroModule)
  },
  {
    path: 'edit-unidad-centro',
    loadChildren: () => import('./edit-unidad-centro/edit-unidad-centro.module').then(m => m.EditUnidadCentroModule)
  },
  {
    path: 'delete-unidad-centro',
    loadChildren: () => import('./delete-unidad-centro/delete-unidad-centro.module').then(m => m.DeleteUnidadCentroModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesCentroRoutingModule{ }

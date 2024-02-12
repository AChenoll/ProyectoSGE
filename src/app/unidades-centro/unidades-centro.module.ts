import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudMaterialModule } from '../modules/crud-material/crud-material.module';
import { UnidadesCentroRoutingModule } from './unidades-centro-routing.module';
import { UnidadesCentroComponent } from './unidades-centro.component';
import { AddUnidadCentroComponent } from './add-unidad-centro/add-unidad-centro.component';
import { DeleteUnidadCentroComponent } from './delete-unidad-centro/delete-unidad-centro.component';
import { EditUnidadCentroComponent } from './edit-unidad-centro/edit-unidad-centro.component';
import { DatosUnidadCentroModule } from './datos-unidad-centro/datos-unidad-centro.module';



@NgModule({
  declarations: [UnidadesCentroComponent, AddUnidadCentroComponent, DeleteUnidadCentroComponent, EditUnidadCentroComponent],
  imports: [
    CommonModule,
    CrudMaterialModule,
    UnidadesCentroRoutingModule,
    DatosUnidadCentroModule
  ],
  entryComponents:[
    AddUnidadCentroComponent,
    EditUnidadCentroComponent,
    DeleteUnidadCentroComponent
  ]
})
export class UnidadesCentroModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosBasicosUnidadCentroRoutingModule } from './datos-basicos-unidad-centro-routing.module';
import { DatosBasicosUnidadCentroComponent } from './datos-basicos-unidad-centro.component';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';



@NgModule({
  declarations: [DatosBasicosUnidadCentroComponent],
  imports: [
    CommonModule,
    CrudMaterialModule,
    DatosBasicosUnidadCentroRoutingModule
  ]
})
export class DatosBasicosUnidadCentroModule { }

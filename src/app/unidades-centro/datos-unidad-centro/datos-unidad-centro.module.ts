import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosUnidadCentroComponent } from './datos-unidad-centro.component';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';
import { DatosUnidadCentroRoutingModule } from './datos-unidad-centro-routing.module';
import { DatosBasicosUnidadCentroComponent } from './datos-basicos-unidad-centro/datos-basicos-unidad-centro.component';
import { DatosBasicosAlumnosComponent } from './datos-basicos-alumnos/datos-basicos-alumnos.component';



@NgModule({
  declarations: [DatosUnidadCentroComponent],
  imports: [
    CommonModule,
    CrudMaterialModule,
    DatosUnidadCentroRoutingModule
  ]
})
export class DatosUnidadCentroModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';
import { DeleteAlumnoComponent } from './delete-alumno/delete-alumno.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { CrudMaterialModule } from 'src/app/modules/crud-material/crud-material.module';
import { DatosBasicosAlumnosRoutingModule } from './datos-basicos-alumnos-routing.module';
import { DatosBasicosAlumnosComponent } from './datos-basicos-alumnos.component';
import { EdadAlumnoPipe } from 'src/app/shared/pipes/edad-alumno.pipe';
import { LinkedinUrlPipe } from 'src/app/shared/pipes/linkedin-url.pipe';



@NgModule({
  declarations: [EditAlumnoComponent, DeleteAlumnoComponent, AddAlumnoComponent, DatosBasicosAlumnosComponent, EdadAlumnoPipe, LinkedinUrlPipe],
  imports: [
    CommonModule,
    CrudMaterialModule,
    DatosBasicosAlumnosRoutingModule
  ]
})
export class DatosBasicosAlumnosModule { }

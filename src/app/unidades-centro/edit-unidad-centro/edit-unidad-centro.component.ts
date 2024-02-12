import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CiclosService } from 'src/app/services/ciclos.service';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { Ciclo } from 'src/app/shared/interfaces/ciclo';
import { Unidad } from 'src/app/shared/interfaces/unidad';
import { UnidadCentro } from 'src/app/shared/interfaces/unidad-centro';
import { CLOSE, INVALID_FORM } from 'src/app/shared/messages';
import { validador } from 'src/app/shared/validators/validator';

@Component({
  selector: 'app-edit-unidad-centro',
  templateUrl: './edit-unidad-centro.component.html',
  styleUrls: ['./edit-unidad-centro.component.scss']
})
export class EditUnidadCentroComponent implements OnInit {
  editUnidadCentro: FormGroup;
  ciclos: Ciclo[];

  constructor(
    public dialogRef: MatDialogRef<EditUnidadCentroComponent>,
    private servicioEditUnidadCentro: UnidadesCentroService,
    public snackBar: MatSnackBar,
    private ciclosService: CiclosService,
    @Inject(MAT_DIALOG_DATA) public unidadCentro: UnidadCentro
  ) { }

  ngOnInit(): void {
    this.editUnidadCentro=new FormGroup({
      id_unidad_centro: new FormControl(this.unidadCentro.id_unidad_centro),
      unidad_centro: new FormControl(null, [Validators.required]),
      id_ciclo: new FormControl(null, [Validators.required]),
      observaciones: new FormControl(null)
    });

  }

  async confirmEdit(){
    if(this.editUnidadCentro.valid){
      const unidadCentro=this.editUnidadCentro.value;

      const RESP  = await this.servicioEditUnidadCentro.editUnidadCentro(unidadCentro).toPromise();
      if(RESP.ok){
        this.snackBar.open(RESP.message, CLOSE, {duration:5000});
        this.dialogRef.close({ok:RESP.ok, data: RESP.data});
      } else {
        this.snackBar.open(RESP.message, CLOSE, {duration:5000})
      }
    } else {
      this.snackBar.open(INVALID_FORM, CLOSE, {duration: 5000})
    }
  }

  onNoClick(): void{
    this.dialogRef.close({ok: false});
  }

  async getCiclos(){
    const RESPONSE = await this.ciclosService.getAllCiclos().toPromise();

    if(RESPONSE.ok){
      this.ciclos=RESPONSE.data as Ciclo[];
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { UnidadCentro } from 'src/app/shared/interfaces/unidad-centro';
import { CLOSE, INVALID_FORM } from 'src/app/shared/messages';

@Component({
  selector: 'app-add-unidad-centro',
  templateUrl: './add-unidad-centro.component.html',
  styleUrls: ['./add-unidad-centro.component.scss']
})
export class AddUnidadCentroComponent implements OnInit {

  unidadCentroForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUnidadCentroComponent>,
    private snackBar: MatSnackBar,
    private servicioRoles: UnidadesCentroService
    ) { }

  ngOnInit(): void {
    this.unidadCentroForm=new FormGroup({
      unidad_centro: new FormControl(null, Validators.required),
      id_ciclo: new FormControl(null, Validators.required),
      observaciones: new FormControl(null)
    });
  }

  async confirmAdd(){
    if(this.unidadCentroForm.valid){
      const unidadCentro=this.unidadCentroForm.value as UnidadCentro;

      const RESP= await this.servicioRoles.addUnidadCentro(unidadCentro).toPromise();
      if(RESP.ok){
        this.snackBar.open(RESP.message, CLOSE, {duration: 5000});
        this.dialogRef.close({ok: RESP.ok, data: RESP.data});
      } else {
        this.snackBar.open(RESP.message, CLOSE, {duration: 5000});
      }
    } else {
      this.snackBar.open(INVALID_FORM, CLOSE, {duration: 5000})
    }
  }

  onNoClick(): void{
    this.dialogRef.close({ok: false});
  }

}

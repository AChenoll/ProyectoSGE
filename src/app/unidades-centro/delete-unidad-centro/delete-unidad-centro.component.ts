import { UnidadCentro } from './../../shared/interfaces/unidad-centro';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { CLOSE } from 'src/app/shared/messages';

@Component({
  selector: 'app-delete-unidad-centro',
  templateUrl: './delete-unidad-centro.component.html',
  styleUrls: ['./delete-unidad-centro.component.scss']
})
export class DeleteUnidadCentroComponent implements OnInit {
  unidadCentro: UnidadCentro;

  constructor(public dialogRef: MatDialogRef<DeleteUnidadCentroComponent>,
    @Inject(MAT_DIALOG_DATA) public unidadCentros: UnidadCentro,
    public servicioRoles: UnidadesCentroService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  onNoClick(): void{
    this.dialogRef.close({ok: false});
  }

  async confirmDelete(){
    const RESP=await this.servicioRoles.deleteUnidadCentro(this.unidadCentros.id_unidad_centro).toPromise();
    if(RESP.ok){
      this.snackBar.open(RESP.message, CLOSE, {duration:5000});
      this.dialogRef.close({ok:RESP.ok, data: RESP.data});
    } else {
      this.snackBar.open(RESP.message, CLOSE, {duration:5000})
    }
  }

}

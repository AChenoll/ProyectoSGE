import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UnidadCentro } from '../shared/interfaces/unidad-centro';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UnidadesCentroService } from '../services/unidades-centro.service';
import { Overlay } from '@angular/cdk/overlay';
import { Permises } from '../shared/interfaces/api-response';
import { AddUnidadCentroComponent } from './add-unidad-centro/add-unidad-centro.component';
import { EditUnidadCentroComponent } from './edit-unidad-centro/edit-unidad-centro.component';
import { DeleteUnidadCentroComponent } from './delete-unidad-centro/delete-unidad-centro.component';
import { DatosUnidadCentroComponent } from './datos-unidad-centro/datos-unidad-centro.component';


@Component({
  selector: 'app-unidades-centro',
  templateUrl: './unidades-centro.component.html',
  styleUrls: ['./unidades-centro.component.scss']
})
export class UnidadesCentroComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<UnidadCentro> = new MatTableDataSource();

  idUnidadCentroFilter=new FormControl();
  unidadCentroFilter=new FormControl();
  idCicloFilter=new FormControl();

  unidadCentro: UnidadCentro;

  permises: Permises;

  displayedColumns:string[];
  private filterValues= {id_unidad_centro: '', unidad_centro:'', id_ciclo:''};

  constructor(
    public dialog: MatDialog,
    private UnidadesCentroService: UnidadesCentroService,
    private overlay: Overlay
  ) { }

  ngOnInit(): void {
    this.getUnidadesCentro();
  }

  async getUnidadesCentro() {
    const RESPONSE = await this.UnidadesCentroService.getAllUnidadesCentro().toPromise();
    this.permises=RESPONSE.permises;

    if (RESPONSE.ok) {
      this.UnidadesCentroService.unidadesCentro = RESPONSE.data as UnidadCentro[];
      this.displayedColumns = ['id_unidad_centro', 'unidad_centro', 'id_ciclo', 'actions'];
      this.dataSource.data = this.UnidadesCentroService.unidadesCentro;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.createFilter();
      this.onChanges();
    }
  }

  createFilter(): (unidadCentro: UnidadCentro, filter: string) => boolean {
    const filterFunction = (unidadCentro: UnidadCentro, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);

      return unidadCentro.id_unidad_centro.toString().indexOf(searchTerms.id_unidad_centro) !== -1
        && unidadCentro.unidad_centro.toLowerCase().indexOf(searchTerms.unidad_centro.toLowerCase()) !== -1
        && unidadCentro.id_ciclo.toString().indexOf(searchTerms.id_ciclo) !== -1

    };

    return filterFunction;
  }

  onChanges() {
    this.idUnidadCentroFilter.valueChanges.subscribe(value => {
        this.filterValues.id_unidad_centro = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.unidadCentroFilter.valueChanges
    .subscribe(value => {
        this.filterValues.unidad_centro = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.idCicloFilter.valueChanges
    .subscribe(value => {
        this.filterValues.id_ciclo = value;
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });

  }

  async addUnidadesCentro(){
    const dialogRef = this.dialog.open(AddUnidadCentroComponent);
    const RESULT = await dialogRef.afterClosed().toPromise();
    if(RESULT){
      if(RESULT.ok){
        this.ngOnInit();
      }
    }
  }

  async datosUnidadCentro(unidadCentro: UnidadCentro) {
    const UNIDAD_CENTRO = unidadCentro

    if (UNIDAD_CENTRO){
      const dialogRef = this.dialog.open(DatosUnidadCentroComponent, {
        width: '90%',
        maxWidth: '90%',
        scrollStrategy: this.overlay.scrollStrategies.noop(),
        disableClose: true,
        data: UNIDAD_CENTRO
      });

      const RESULT = await dialogRef.afterClosed().toPromise();
      await this.getUnidadesCentro();
    }
  }

  async editUnidadesCentro(unidadCentro: UnidadCentro){
    const dialogRef = this.dialog.open(EditUnidadCentroComponent, {data: unidadCentro, scrollStrategy: this.overlay.scrollStrategies.noop()});
    const RESULT = await dialogRef.afterClosed().toPromise();
    if(RESULT){
      if(RESULT.ok){
        this.ngOnInit()
      }
    }
  }

  async deleteUnidadesCentro(unidadCentro: UnidadCentro){
    const dialogRef = this.dialog.open(DeleteUnidadCentroComponent, {data: unidadCentro, scrollStrategy: this.overlay.scrollStrategies.noop()});
    const RESULT = await dialogRef.afterClosed().toPromise();
    if(RESULT){
      if(RESULT.ok){
        this.ngOnInit()
      }
    }
  }

}

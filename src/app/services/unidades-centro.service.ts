import { Injectable } from '@angular/core';
import { UnidadCentro } from '../shared/interfaces/unidad-centro';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../shared/common.service';
import { ApiResponse } from '../shared/interfaces/api-response';
import { URL_API } from 'src/environments/environment';
import { Unidad } from '../shared/interfaces/unidad';

const ENDPOINT='unidad_centro'

@Injectable({
  providedIn: 'root'
})
export class UnidadesCentroService {

  unidadCentro:UnidadCentro;
  unidadesCentro: UnidadCentro[];

  constructor(private http: HttpClient, private commonService: CommonService) { }

  get(){
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, { headers: this.commonService.headers});
  }

  getAllUnidadesCentro(){
    return this.http.get<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, { headers: this.commonService.headers });
  }

  addUnidadCentro(unidad_centro: UnidadCentro) {
    const body = JSON.stringify(unidad_centro);
    return this.http.post<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
  }

  editUnidadCentro(unidad_centro: UnidadCentro) {
    const body = JSON.stringify(unidad_centro);
    return this.http.put<ApiResponse>(`${URL_API}/${ENDPOINT}.php`, body, { headers: this.commonService.headers });
  }

  deleteUnidadCentro(id: number|string) {
    return this.http.delete<ApiResponse>(`${URL_API}/${ENDPOINT}.php?id=${id}`, {headers: this.commonService.headers });
  }

  setUnidadCentro(unidadCentro: UnidadCentro){
    this.unidadCentro=unidadCentro;
  }

  setDatosBasicosUnidadCentro(formUnidadCentro: any){
    this.unidadCentro.id_unidad_centro = formUnidadCentro.id_unidad_centro;
    this.unidadCentro.unidad_centro = formUnidadCentro.unidad_centro;
    this.unidadCentro.id_ciclo = formUnidadCentro.id_ciclo;
    this.unidadCentro.ciclo = formUnidadCentro.ciclo;
    this.unidadCentro.observaciones = formUnidadCentro.observaciones;
  }

}

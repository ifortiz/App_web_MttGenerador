import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IReporte} from '../interfaces/Interface';
import { Reporte } from '../modals/Reporte';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'actividad/';

  getReporte(id: number): Observable<Reporte> {
    return this.http.get<Reporte>(this.urlEndpoint + 'reporte/' + id);
  }


  getReportees(): Observable<Reporte[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Reporte[]>(this.urlEndpoint + 'listarActividadot');
  }

  createReporte(reporte:Reporte): Observable<IReporte> {
    return this.http.post<IReporte>(this.urlEndpoint + 'reporte', reporte);
    
  }
  
 updateReporte(id:number,reporte:Reporte): Observable<IReporte> {
    return this.http.put<IReporte>(this.urlEndpoint + 'reporte/' + id, reporte);
  }

  deleteReporte(id:number): Observable<IReporte> {
    return this.http.delete<IReporte>(this.urlEndpoint + 'reporte/' + id);
}
}

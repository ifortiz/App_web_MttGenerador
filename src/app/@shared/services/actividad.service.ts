import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from '../modals/Actividad';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'actividad/';

  getActividadid(id: number): Observable<Actividad> {
    return this.http.get<Actividad>(this.urlEndpoint + 'listarActividadot/' + id);
  }

  getActividadByOt(ot: number): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(this.urlEndpoint + 'listarActividadot/' + ot);
  }

  getActividadbyequipo(id: number): Observable<Actividad> {
    return this.http.get<Actividad>(this.urlEndpoint + 'listarActividad/' + id);
  }

  getActividades(): Observable<Actividad[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Actividad[]>(this.urlEndpoint + 'listar');
  }

}
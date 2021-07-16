import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidad } from '../modals/Unidad';
import { IUnidad } from '../interfaces/Interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'unidad/';

  getUnidad(id: number): Observable<Unidad> {
    return this.http.get<Unidad>(this.urlEndpoint + 'unidad/' + id);
  }


  getUnidades(): Observable<Unidad[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Unidad[]>(this.urlEndpoint + 'listar');
  }

  createUnidad(unidad:Unidad): Observable<IUnidad> {
    return this.http.post<IUnidad>(this.urlEndpoint + 'unidad', unidad);
    
  }
  
 updateUnidad(id:number,unidad:Unidad): Observable<IUnidad> {
    return this.http.put<IUnidad>(this.urlEndpoint + 'unidad/' + id, unidad);
  }

  deleteUnidad(id:number): Observable<IUnidad> {
    return this.http.delete<IUnidad>(this.urlEndpoint + 'unidad/' + id);
}
}

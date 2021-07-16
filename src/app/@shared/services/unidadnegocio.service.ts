import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUnidadnegocio} from '../interfaces/Interface';
import { Unidadnegocio } from '../modals/Unidadnegocio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnidadnegocioService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'unidadnegocio/';

  getUnidadnegocio(id: number): Observable<Unidadnegocio> {
    return this.http.get<Unidadnegocio>(this.urlEndpoint + 'unidadnegocio/' + id);
  }


  getUnidadnegocios(): Observable<Unidadnegocio[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Unidadnegocio[]>(this.urlEndpoint + 'listar');
  }

  createUnidadnegocio(unidadnegocio:Unidadnegocio): Observable<IUnidadnegocio> {
    return this.http.post<IUnidadnegocio>(this.urlEndpoint + 'unidadnegocio', unidadnegocio);
    
  }
  
 updateUnidadnegocio(id:number,unidadnegocio:Unidadnegocio): Observable<IUnidadnegocio> {
    return this.http.put<IUnidadnegocio>(this.urlEndpoint + 'unidadnegocio/' + id, unidadnegocio);
  }

  deleteUnidadnegocio(id:number): Observable<IUnidadnegocio> {
    return this.http.delete<IUnidadnegocio>(this.urlEndpoint + 'unidadnegocio/' + id);
}
}

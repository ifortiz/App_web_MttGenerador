import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICentral} from '../interfaces/Interface';
import { Central } from '../modals/Central';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'central/';
  getCentral(id: number): Observable<Central> {
    return this.http.get<Central>(this.urlEndpoint + 'central/' + id);
  }


  getCentrales(): Observable<Central[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Central[]>(this.urlEndpoint + 'listar');
  }

  createCentral(central:Central): Observable<ICentral> {
    return this.http.post<ICentral>(this.urlEndpoint + 'central', central);
    
  }
  
 updateCentral(id:number,central:Central): Observable<ICentral> {
    return this.http.put<ICentral>(this.urlEndpoint + 'central/' + id, central);
  }

  deleteCentral(id:number): Observable<ICentral> {
    return this.http.delete<ICentral>(this.urlEndpoint + 'central/' + id);
}
}

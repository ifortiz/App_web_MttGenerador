import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sistema } from '../modals/Sistema';
import { ISistema } from '../interfaces/Interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'sistema/';

  getSistema(id: number): Observable<Sistema> {
    return this.http.get<Sistema>(this.urlEndpoint + 'sistema/' + id);
  }


  getSistemas(): Observable<Sistema[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Sistema[]>(this.urlEndpoint + 'listar');
  }

  createSistema(sistema:Sistema): Observable<ISistema> {
    return this.http.post<ISistema>(this.urlEndpoint + 'sistema', sistema);
    
  }
  
 updateSistema(id:number,sistema:Sistema): Observable<ISistema> {
    return this.http.put<ISistema>(this.urlEndpoint + 'sistema/' + id, sistema);
  }

  deleteSistema(id:number): Observable<ISistema> {
    return this.http.delete<ISistema>(this.urlEndpoint + 'sistema/' + id);
}
}

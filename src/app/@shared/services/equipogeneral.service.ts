import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipogeneral } from '../modals/Equipogeneral';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EquipogeneralService {

  constructor(private http: HttpClient) { }

  private urlEndpoint = environment.urlEndpoint + 'equipogeneral/';

  getEquipogeneral(ot: number): Observable<Equipogeneral> {
    return this.http.get<Equipogeneral>(this.urlEndpoint + 'equipogeneral/' + ot);
  }

  getEquipogenerales(): Observable<Equipogeneral[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Equipogeneral[]>(this.urlEndpoint + 'listar');
  }

}
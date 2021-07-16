import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modals/Usuario';
import { IUsuario } from '../interfaces/Interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //Url='http://localhost:8888/usuario/';
  private urlEndpoint = environment.urlEndpoint + 'usuario/';

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.urlEndpoint + 'usuario/' + id);
  }


  getUsuarios(): Observable<Usuario[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Usuario[]>(this.urlEndpoint + 'listar');
  }

  createUsuario(usuario:Usuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.urlEndpoint + 'usuario', usuario);
    
  }
  
  updateUsuario(id:number,usuario:Usuario): Observable<IUsuario> {
    return this.http.put<IUsuario>(this.urlEndpoint + 'usuario/' + id, usuario);
  }

  deleteUsuario(id:number): Observable<IUsuario> {
    return this.http.delete<IUsuario>(this.urlEndpoint + 'usuario/' + id);
}
}

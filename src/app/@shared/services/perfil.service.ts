import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfil } from '../modals/Perfil';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
   usuario:any ;
  private keySession: string = "user";
  constructor(private http: HttpClient) { 

  }

  private urlEndpoint = environment.urlEndpoint + 'perfil/';


  getPerfiles(): Observable<Perfil[]>{     // ese any debe ser una interfaz con los mismos campos que retorna tu servicio
    return this.http.get<Perfil[]>(this.urlEndpoint + 'listar');
  }
  getUsuario(): string {
    
   this.usuario = JSON.parse(localStorage.getItem('user') || '{}');
   console.log( 'usuario:', this.usuario );
    if(this.usuario ==null){
      return ''
    }else{
    if (this.usuario.perfiles != undefined)
      return this.usuario.perfiles[0].nombre;
    else
      return ''
    }
  }
  getSession(): Promise<any> {
  return this.usuario = JSON.parse(localStorage.getItem('user') || '{}');
}

} 
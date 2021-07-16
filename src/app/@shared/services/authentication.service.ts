import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

//import { environment } from '@environments/environment';
import { Usuario } from 'src/app/@shared/modals/Usuario';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    /* private currentUsuarioSubject: BehaviorSubject<Usuario>;
    public currentUsuario: Observable<Usuario>; */


    private _usuario: Usuario;


    constructor(private http: HttpClient) {
        this._usuario = new Usuario();
        /* this.currentUsuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUsuario')));
        this.currentUsuario = this.currentUsuarioSubject.asObservable(); */
    }

    public getUsuario(): Usuario {
        var sys = localStorage.getItem('user');
        return this._usuario != null ? this._usuario : (this._usuario == null && sys != null ? JSON.parse(sys) as Usuario : new Usuario());
    }

    public get user(): Usuario {

        if (this._usuario != null) {
          return this._usuario;
        } else if (this._usuario == null && localStorage.getItem('user') != null) {
          this._usuario = JSON.parse(localStorage.getItem('user') || '{}') as Usuario;
          return this._usuario;
        }
        return new Usuario();
      }

   /*  public get currentUsuarioValue(): Usuario {
        return this.currentUsuarioSubject.value;
    } */

    private urlEndpoint = environment.urlEndpoint + 'usuario/';

    login(correo: string, password: string) {
        let user = new Usuario();
        user.correo = correo;
        user.password = password;

        return this.http.post<any>(this.urlEndpoint + 'login/', user)
            .pipe(map(user => {
                console.log('user : ', user)
                if (user.id != null) {

                    localStorage.setItem('user', JSON.stringify(user));
                }

                // login successful if there's a jwt token in the response
                //if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                //    localStorage.setItem('user', JSON.stringify(user));
                    /* this.currentUsuarioSubject.next(user); */
                //}

                return user;
            }));
    }
    

    logout() {
        this._usuario = new Usuario();
        localStorage.removeItem('user');
        localStorage.clear();
        /* // remove user from local storage to log user out
        localStorage.removeItem('currentUsuario');
        this.currentUsuarioSubject.next(null); */
    }
}
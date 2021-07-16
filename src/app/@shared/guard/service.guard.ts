import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PerfilService } from '../services/perfil.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceGuard implements CanActivate {
  constructor(private router: Router, private perfilService: PerfilService,) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.perfilService.getSession().then(item => {
        if (item != null) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false)
        }
      })
    })

  }

}

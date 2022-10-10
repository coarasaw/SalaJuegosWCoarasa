import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //const user = localStorage.getItem('user');
      let datoUsuario = JSON.parse(localStorage.getItem('user'));
      let email = datoUsuario.email;
      console.log('email ',email);

      if (email != 'admin@gmail.com') {
        this.router.navigate(['/']);
      }

    return true;
  }
  
}


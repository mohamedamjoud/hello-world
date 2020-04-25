import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class UserToken {}

@Injectable({
  providedIn: 'root'
})
export class Permissions_ {

  constructor(
    private authService : AuthService,
    private route : Router) {}

  canActivate(user: UserToken, id: string, state: RouterStateSnapshot ): boolean {
  
    if (this.authService.isLoggedIn()) { return true; }

    this.route.navigate(['/login'],{ queryParams : { returnUrl : state.url}});

    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CanActivateTeam implements CanActivate {

  constructor(
    private permissions: Permissions_, 
    private currentUser: UserToken) 
    {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
     return this.permissions.canActivate(this.currentUser, route.params.id,state);
  }
}


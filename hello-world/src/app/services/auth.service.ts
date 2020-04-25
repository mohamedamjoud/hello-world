import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { AppError } from '../common/app-error';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials){
    return this.http.post('/api/authenticate',credentials)
      .pipe(
        map(response => {

           if (response && response.hasOwnProperty('token') ){
            localStorage.setItem('token',response['token']);
            return true;
           }
           else 
            return false;
        }),
        catchError(this.handleError)
      );
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    let jwtHelper = new JwtHelperService();

    let token = localStorage.getItem('token');
    if(token)
    {
      return !jwtHelper.isTokenExpired(token);
    }

    return false;  
  }

  getLogedUser(){

    let token = localStorage.getItem('token');
    if(!token)
      return null;
    return new JwtHelperService().decodeToken(token);
  }

  private handleError(error : Response){
    if(error.status === 404)
    return throwError(new NotFoundError(JSON.stringify(error).toString()));
    
    if(error.status === 400)
    return throwError(new BadRequestError(JSON.stringify(error).toString()));

    return throwError(new AppError(JSON.stringify(error).toString()));  
}
}

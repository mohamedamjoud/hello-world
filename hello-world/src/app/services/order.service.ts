import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { AppError } from 'src/app/common/app-error';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private authService : AuthService,
    // private authHttp: HttpClient,
    ) { }

  getOrder(){

    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().append('Authorization','Bearer'+token);

    return this.http.get('/api/orders',{headers})
      .pipe(
        map(response=> response),
        catchError(this.handleError)
      );
  }
  
  private handleError(error : Response){
    if(error.status === 404)
    return throwError(new NotFoundError(JSON.stringify(error).toString()));
    
    if(error.status === 400)
    return throwError(new BadRequestError(JSON.stringify(error).toString()));

    return throwError(new AppError(JSON.stringify(error).toString()));  
}
}

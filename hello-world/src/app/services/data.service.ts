    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { catchError, map } from 'rxjs/operators';
    import { throwError } from 'rxjs';
    import { AppError } from '../common/app-error';
    import { NotFoundError } from '../common/not-found-error';
    import { BadRequestError } from '../common/bad-request-error';

 

    export class DataService {

        constructor(private http : HttpClient,private url : string) {
        
        }
        DataService(){

        }
    
        get (){
            return this.http.get(this.url)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
        }
    
        add(reference) {
            return this.http.post(this.url, reference)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
        }
    
        patch(reference){
            return this.http.patch(this.url+'/'+reference.id ,JSON.stringify({title : 'kfnrgr'}));
        }
    
        update(reference){
            return this.http.put(this.url + '/' + reference.id , reference)
            .pipe(
                map(response => response),
                catchError(this.handleError)
            );
        }

        delete(id){
            return this.http.delete(this.url + '/' + id)
            .pipe(
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
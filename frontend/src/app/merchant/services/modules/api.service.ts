import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'


const TOKEN_KEY = 'accessToken';
interface userResponse {
  success: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  waferEndpoint: string
  BCEndpoint: string
  constructor(private http: HttpClient, private router: Router) {
    this.BCEndpoint = environment.BCEndpoint;
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  private extractData(res: userResponse) {
   // console.log(res);
      // console.log(res.headers.get("X-updated-access-token"));
    
    let body = res;
    return body || {};
  }
//   private extractData1(res: HttpResponse<any>) {
//     // console.log(res);
//       console.log(res.headers.get("X-updated-access-token"));
//       let body = res;
//       return body || {};
//   }

  private handleError(error: HttpErrorResponse) {
    if (error.error.status === 6666) { //6666 - refresh token Expired 
      localStorage.clear();
      this.router.navigate(['/']);
    }
     else {
      return throwError(error.error);
    }
  };

  public get(url: string,headers?:any): Observable<any> {
    return this.http.get<userResponse>(`${this.BCEndpoint}/${url}`,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }

  public post(url: string, data?: any,headers?:any): Observable<any> {
    console.log(`${this.BCEndpoint}/${url}`)
    return this.http.post(`${this.BCEndpoint}/${url}`, data,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }

  public update(url: string, data: any,headers?:any): Observable<any> {
    return this.http.put<userResponse>(`${this.BCEndpoint}/${url}`, data,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }

  public delete(url: string,headers?:any): Observable<any> {
    return this.http.delete<userResponse>(`${this.BCEndpoint}/${url}`,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }
  //////////////////////////
  public patch(url: string, data: any,headers?:any): Observable<any> {
    return this.http.patch<userResponse>(`${this.BCEndpoint}/${url}`, data,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }
  public put(url: string, data: any,headers?:any): Observable<any> {
    return this.http.put<userResponse>(`${this.BCEndpoint}/${url}`, data,{headers}).pipe(map(this.extractData),
      catchError(this.handleError))
  }
}
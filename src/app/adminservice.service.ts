import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

 
  constructor(private http:HttpClient) { }
  public adminservice(admin:Admin):Observable<any>
  {
return this.http.post<any>("http://localhost:8083//admin/login",admin)
  }

  public register(admin:Admin):Observable<any>
  {
    return this.http.post<any>("http://localhost:8083/admin",admin)
  }
}

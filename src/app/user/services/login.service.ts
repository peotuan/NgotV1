import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = '';

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  login(form: any): Observable<any> {
    return this.http.post(`${this.api}/account/account-info`, form);
  }
}

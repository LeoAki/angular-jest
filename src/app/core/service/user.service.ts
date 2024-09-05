import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { UsersNs } from '../interfaces/users/users.ns';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  getUser(): Observable<UsersNs.AllI> {
    return this.http.get<UsersNs.AllI>(environment.baseUrl + 'users');
  }

}

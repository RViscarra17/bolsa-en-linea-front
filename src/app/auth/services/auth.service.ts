import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login, User, UserR } from "../interface/login";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _url = "https://laravel-admin.test/api";

  constructor(private http: HttpClient) {}

  login(data: Login): Observable<string> {
    return this.http.post<string>(`${this._url}/login`, data, {
      withCredentials: true,
    });
  }

  user(): Observable<User> {
    return this.http.get<User>(`${this._url}/user`, {
      withCredentials: true,
    });
  }

  logout(): Observable<string> {
    return this.http.post<string>(
      `${this._url}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
  }

  register( data: UserR ): Observable<User> {
    return this.http.post<User>(`${this._url}/register`, data);
  }
}
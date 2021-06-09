import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Login, User, UserR, Usuario, Toke } from "../interface/login";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _url = "http://localhost:8000/api";
  private _token!: string;
  private _user: Usuario = {};

  get usuario() {
    return { ...this._user };
  }

  public get token(): string {
    return this._token;
  }

  constructor(private http: HttpClient) {}

  login(data: Usuario): Observable<Toke> {
    return this.http.post<Toke>(`${this._url}/login`, data).pipe(
      tap((resp) => {
        const { access_token } = resp;
        this._token = access_token;
        localStorage.setItem("token", this._token);
      })
    );
  }

  user(): Observable<Usuario> {
    return this.http
      .get<Usuario>(`${this._url}/user`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this._token}`,
        },
      })
      .pipe(
        tap((usuario) => {
          this._user = usuario;
        })
      );
  }

  // logout(): Observable<string> {
  //   return this.http.post<string>(
  //     `${this._url}/logout`,
  //     {},
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // }

  register(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this._url}/register`, data);
  }

  logout(): Observable<string> {
    return this.http.post<string>(
      `${this._url}/logout`,
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this._token}`,
        },
      }
    );
  }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { Login, User, UserR, Usuario, Toke, Data, Usu } from "../interface/login";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _url = environment.apiUrl;
  private _token: string = localStorage.getItem('token') || '';
  private _user!: Usu;
  private _rol!: string;

  get usuario() {
    return { ...this._user };
  }

  public get token(): string {
    return this._token;
  }

  get rol() {
    return this._rol;
  }

  constructor(private http: HttpClient) {}

  login(data: Usuario): Observable<Toke> {
    return this.http.post<Toke>(`${this._url}/login`, data).pipe(
      tap((resp) => {
        const { access_token } = resp;
        this._token = access_token;
        localStorage.setItem("token", this._token);
      }),
      // catchError(error => of({'access_token': ''}))
    );
  }

  user(): Observable<boolean> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);

    return this.http
      .get<Data>(`${this._url}/utilidades/usuario`, {
        headers,
      })
      .pipe(
        tap(({ data }) => {
          this._user = data;
        }),
        map(( _ ) => {
          return true;
        }),
        catchError((error) => of(false))
      );
  }

  auth(): Observable<boolean> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);

    return this.http
      .get<Data>(`${this._url}/utilidades/usuario`, {
        headers,
      })
      .pipe(
        map(( _ ) => {
          return false;
        }),
        catchError((error) => of(true))
      );
  }

  obtenerRol() {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);

      return this.http
      .get<string[]>(`${this._url}/utilidades/roles`, {
        headers,
      })
      .pipe(
        tap(( role) => {
          // console.log(role);
          
          this._rol = role.toString();
        })
      );
  }

  register(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this._url}/register`, data, {
      headers: {
        Accept: "application/json",
      }
    });
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
    ).pipe(
      tap(( _ ) => {
        localStorage.removeItem('token');
      })
    );
  }
}

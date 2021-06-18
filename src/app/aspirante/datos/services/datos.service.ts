import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Dato } from '../interfaces/dato';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private _url = environment.apiUrl;
  private _token = localStorage.getItem("token") || "";

  constructor(private http: HttpClient) { }

  getDatos(): Observable<Dato[]> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Dato[]>(`${this._url}/perfiles`, { headers });
  }
  getDatoPorId(id: number): Observable<Dato> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Dato>(`${this._url}/perfiles/${id}`, { headers });
  }
  agregarDato(dato: Dato): Observable<Dato> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.post<Dato>(`${this._url}/perfiles`, dato, { headers });
  }

  actualizarDato(dato: Dato): Observable<Dato> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.put<Dato>(`${this._url}/perfiles/${dato.id}`, dato, { headers });
  }
  borrarDato(id: number): Observable<any> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.delete<any>(`${this._url}/perfiles/${id}`, { headers });
  }
}

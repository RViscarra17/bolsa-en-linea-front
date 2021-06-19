import { PermisoCorto } from './../interfaces/permiso';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Permiso } from '../interfaces/permiso';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  private _url = `${environment.apiUrl}`;
  private _token = localStorage.getItem("token") || "";

  constructor(private http: HttpClient) { }

  getPermisos() {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Permiso[]>(`${this._url}/admin/permisos`, { headers });
  }

  getMisPermisos() {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get(`${this._url}/utilidades/permisos`, { headers });
  }
}

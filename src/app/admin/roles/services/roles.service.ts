import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Rol } from "../interfaces/rol";

@Injectable({
  providedIn: "root",
})
export class RolesService {
  private _url = `${environment.apiUrl}/admin`;
  private _token = localStorage.getItem("token") || "";

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Rol[]> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Rol[]>(`${this._url}/roles`, { headers });
  }
  getRolPorId(id: string): Observable<Rol> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Rol>(`${this._url}/roles/${id}`, { headers });
  }
  agregarRol(rol: Rol): Observable<Rol> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.post<Rol>(`${this._url}/roles`, rol, { headers });
  }

  actualizarRol(rol: Rol): Observable<Rol> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.put<Rol>(`${this._url}/roles/${rol.id}`, rol, { headers });
  }
  borrarRol(id: number): Observable<any> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.delete<any>(`${this._url}/roles/${id}`, { headers });
  }
}

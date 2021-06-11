import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../interfaces/usuario";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  private _url = "http://localhost:8000/api";
  private _token = localStorage.getItem("token") || "";

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Usuario[]>(`${this._url}/usuarios`, { headers });
  }
  getUsuarioPorId(id: string): Observable<Usuario> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Usuario>(`${this._url}/usuarios/${id}`, { headers });
  }
  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.put<Usuario>(
      `${this._url}/usuarios/${usuario.id}`,
      usuario,
      { headers }
    );
  }
  borrarUsuario(id: number): Observable<any> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.delete<any>(`${this._url}/usuarios/${id}`, { headers });
  }
}

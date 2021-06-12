import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Empresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private _url = environment.apiUrl;
  private _token = localStorage.getItem("token") || "";
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Empresa[]>(`${this._url}/empresas`, { headers });
  }
  getEmpresaPorId(id: string): Observable<Empresa> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.get<Empresa>(`${this._url}/empresas/${id}`, { headers });
  }
  agregarEmpresa(empresa: Empresa): Observable<Empresa> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.post<Empresa>(`${this._url}/empresas`, empresa, { headers });
  }

  actualizarEmpresa(empresa: Empresa): Observable<Empresa> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.put<Empresa>(`${this._url}/empresas/${empresa.id}`, empresa, { headers });
  }
  borrarEmpresa(id: number): Observable<any> {
    const headers = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${this._token || ""}`);
    return this.http.delete<any>(`${this._url}/empresas/${id}`, { headers });
  }
}

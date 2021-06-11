import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Rol } from '../interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private _url = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]>{
    return this.http.get<Rol[]>(`${ this._url}/roles`);
  }
  getRolPorId( id: string ):Observable<Rol> {
    return this.http.get<Rol>(`${ this._url}/roles/${ id }`);
  }
  agregarRol( rol: Rol ): Observable<Rol> {
    return this.http.post<Rol>(`${ this._url }/roles`, rol );
  }

  actualizarRol( rol: Rol ): Observable<Rol> {
    return this.http.put<Rol>(`${ this._url }/roles/${ rol.id }`, rol );
  }
  borrarRol( id: number ): Observable<any> {
    return this.http.delete<any>(`${ this._url }/roles/${ id }`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private _url = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${ this._url}/usuarios`);
  }
  getUsuarioPorId( id: string ):Observable<Usuario> {
    return this.http.get<Usuario>(`${ this._url}/usuarios/${ id }`);
  }
  actualizarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.put<Usuario>(`${ this._url }/usuarios/${ usuario.id }`, usuario );
  }
  borrarUsuario( id: number ): Observable<any> {
    return this.http.delete<any>(`${ this._url }/usuarios/${ id }`);
  }
}

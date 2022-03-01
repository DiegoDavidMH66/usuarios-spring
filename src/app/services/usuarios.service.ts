import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = 'http://localhost:8001/api';

  constructor(private http: HttpClient) {

  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/getUsers/`);
  }

  eliminarUsuarios(id: number) {
    return this.http.delete(`${this.url}/deleteUser/${id}`);
  }

  obtenerMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>('./assets/data/detalle_perfil.json');
  }

  login(): Observable<Usuario> {
    return this.http.get<Usuario>('./assets/data/usuario.json');
  }
}

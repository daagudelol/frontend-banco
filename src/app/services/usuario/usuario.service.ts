import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) {

  }

  crearUsuario( usuario: Usuario){
    let url = URL_SERVICES + '/usuario';

    return this.http.post(url, usuario);


  }
}

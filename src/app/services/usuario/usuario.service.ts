import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { Observable } from 'rxjs';

import { map, catchError, timeout, switchAll } from 'rxjs/operators';
import * as swal from 'sweetalert';

import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) {

  }

  crearUsuario( usuario: Usuario){
    let url = URL_SERVICES + '/usuario';

    return this.http.post(url, usuario)
    .pipe(map( (resp:any)=>{
        swal('Usuario creado', usuario.nombre, 'success');
        return resp.usuario;
      }));

  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
//import * as sweetalert from 'sweetalert';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class RegisterComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number};
  forma: FormGroup;
  anio: number = new Date().getFullYear();
  //selAnio:number = this.date.year;

  constructor(config: NgbDatepickerConfig, calendar: NgbCalendar,
    public _usuarioService: UsuarioService) {

    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';



  }

  esMayor( anioActual:number, anioDigitado:number ){
    return( group: FormGroup)=>{

      let aa = anioActual;
      let ad = anioDigitado;

      let resultado = (aa - ad);


      if(resultado < 18){
        return null;
      }

      return{
        esMayor: true
      }

    }
  }

  ngOnInit() {

    this.forma = new FormGroup({
      identification: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      dateN: new FormControl(null, [Validators.required])

    }, {validators: this.esMayor(this.anio, 2002)});
  }

  registrarUsuario(){

    /* if (this.forma.invalid){
      return;
    } */
    if( !this.forma.value.name){
      //sweetalert('Importante', 'Debe ingresar el nombre', 'warning');
      return;
    }

    let usuario = new Usuario(
        this.forma.value.identification,
        this.forma.value.name,
        this.forma.value.dateN
    );

    this._usuarioService.crearUsuario(usuario)
               .subscribe( resp => {
                   console.log(resp);
               });

    console.log('formulario valido:', this.forma.valid)
    console.log(this.forma.value)
    console.log('valor de date:',this.date.year);
  };

}

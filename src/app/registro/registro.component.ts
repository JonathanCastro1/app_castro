import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit { 

  mensaje: string;
  alerta: any = false;

  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService,
    public router: Router

  ) { }

  ngOnInit() {

  

  }

  registrar(formulario) {

    //  console.log(formulario);


    if (formulario.valid) {

      this.loginService.registro(
        formulario.value.nombre,
        formulario.value.apellido,
        formulario.value.email,
        formulario.value.password
      )
        .subscribe(
          res => {

            console.log(res);

          });

      this.router.navigate(['login']);

    } else {

       this.alerta=true;
       this.mensaje="Campos obligatorios"

        console.log("Formulario invalido");

    }



  }

}

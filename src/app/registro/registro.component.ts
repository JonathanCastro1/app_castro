import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder

  ) { }

  ngOnInit() {

    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      password: [''],
    });

  }

  registrar() {

    console.log(this.formulario);

  }

}

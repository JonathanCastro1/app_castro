import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css']
})
export class VerusuariosComponent implements OnInit {

  usuarios:any;

  constructor(public usuariosService:UsuariosService


  ) { }

  ngOnInit() {


    this.usuariosService.getUsers().
    subscribe(
      res => {       

        this.usuarios=res['data'];

      });


  }

}

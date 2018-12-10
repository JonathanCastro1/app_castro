import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service'

import { Router } from '@angular/router';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuarios:any;

  constructor(private usuariosService:UsuariosService,
    public router: Router


  ) { }

  ngOnInit() {


    this.usuariosService.getUsers().
    subscribe(
      res => {

        // console.log(res.data[0]);

        // console.log(res.data[0]);

        // console.log(res['data'][0]);

        this.usuarios=res['data'];

      });

    
  }


  eliminar(id){ 
    
    // console.log(id);

    Swal({
      title: 'Estas seguro?',
      text: "Se eliminara el registro!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33'    
     
    }).then((result) => {

      if (result.value) {
           
      Swal('Registro Eliminado!');


        this.usuariosService.deleteUsers(id).
          subscribe(
            res => {

              console.log("eliminado"+res);             

            });

      }
    
      
    });
  }


  ver(id){

     
    this.usuariosService.getUsersById(id).
    subscribe(
      res => {

          console.log(res['data']);

        // this.usuarios=res['data'];

          this.router.navigate(['ver/usuarios']);

      }); 
    

    // this.router.navigate(['ver/usuarios']);
  }

  editar(){

    this.router.navigate(['editar/usuarios']);
  }

}

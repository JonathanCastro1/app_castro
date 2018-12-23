import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// importamos para poder usar map
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient

  ) { }


public registro(nombre:any,apellido:any,email:any,password:any){

  const url = environment.base_url + '/registrar';
  
  const user = "user";

  return this.http.post(url, {
    nombre: nombre,
    apellido: apellido,
    email: email,
    password: password,
    role: user        
  });
  
  
  // return this.http.post(url, {
  //   nombre: nombre,
  //   apellido: apellido,
  //   email: email,
  //   password: password,
  //   role: user        
  // })
  // .pipe(map(res => res.json())); 


}




}


import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// importamos para poder usar map
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient

  ) { }


  public getUsers(){

    const url = environment.base_url + '/usuarios';

    return this.http.get(url);

  }

  public deleteUsers(id){

    const url = environment.base_url + '/eliminar/' + id;

    return this.http.delete(url);

  }

  public getUsersById(id){

    const url = environment.base_url + '/usuarios/' + id;

    return this.http.get(url);

  }

  public editUsersById(id){

    const url = environment.base_url + '/usuarios/' + id + '/edit';

    return this.http.get(url);

  }

  // public updateUsers(id){

  //   const url = environment.base_url + '/usuarios/' + id;

  //   return this.http.put(url);

  // }




}

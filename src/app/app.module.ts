import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './services/login.service';

import {FormsModule} from '@angular/forms';

/* mport {HttpModule} from '@angular/http'; */

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

/* para las rutas */
const appRoutes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'login', component:LoginComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    DashboardComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

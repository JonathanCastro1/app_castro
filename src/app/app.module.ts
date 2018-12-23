import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './services/login.service';


/* importar ReactiveFormsModule,para poder usar this.fb.group etc */
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

/* mport {HttpModule} from '@angular/http'; */

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VerusuariosComponent } from './usuarios/verusuarios/verusuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';

import { ChartsModule } from 'ng2-charts';


/* para las rutas */
const appRoutes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'login', component:LoginComponent},
  {path:'ver/usuarios', component:VerusuariosComponent},
  {path:'editar/usuarios', component:EditarusuariosComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    DashboardComponent,
    UsuariosComponent,
    VerusuariosComponent,
    EditarusuariosComponent 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

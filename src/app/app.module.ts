import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./components/shared/shared.module";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotifierModule, NotifierOptions } from 'angular-notifier';

// Componentes
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';

const options: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right'
    }
  },
  behaviour: {
    onMouseover: 'pauseAutoHide'
  }
}

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent,
    // DialogComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig(options),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

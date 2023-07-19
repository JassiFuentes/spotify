import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  //Aqui declaramos los componentes, directivas...
  declarations: [//TODO:se declaran componentes, directivas, pipes
    AppComponent
  ],
  //Aqui imporatmos los modulos
  imports: [//TODO: solo se importan otros modules
    BrowserModule,
    AppRoutingModule
  ],
  //puedo exportar lo que declare, generalmente se usa para el modulo compartido
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

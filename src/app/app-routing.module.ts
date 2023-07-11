import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

//Aqui declaro mis rutas, la rutas seran objetos
const routes: Routes = [
  //Ruta ppal
  {
    path: '',//string vacio hace referencia a la ruta localhost:4200/
    component:ExampleComponent// este es el recurso que usara la ruta que definimos, debemos asegurarnos de que se importe
  },
  // Otra ruta
  {
    path: 'hello',//hace referencia a localhost:4200/hello
    component:ExampleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

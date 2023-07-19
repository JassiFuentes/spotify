import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Aqui declaro mis rutas, la rutas seran objetos
const routes: Routes = [
  //Ruta ppal o raiz
  {
    path:'', //TODO: localhost:4200/
    //en vez de usar la pdad component, usaremos loadChildren para la carga perezosa ya que las aplicaciones crecen, usamos una importacion dinamica y alli cargamos la ruta del modulo que usaremos
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule),//Promesa
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

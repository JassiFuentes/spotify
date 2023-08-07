import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

//Aqui declaro mis rutas, la rutas seran objetos
const routes: Routes = [
  {
    path:'auth', //TODO:
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule),//Promesa
  },
  //Ruta ppal o raiz
  {
    path:'', //TODO: localhost:4200/
    //en vez de usar la pdad component, usaremos loadChildren para la carga perezosa ya que las aplicaciones crecen, usamos una importacion dinamica y alli cargamos la ruta del modulo que usaremos
    component: HomePageComponent,//hacemos las dos cosas cargar comoenente y modulo
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule),//Promesa
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

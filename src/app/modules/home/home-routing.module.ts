import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',//TODO: http:localhost:4200/ ; Definir parametros: lo haces aca indicando dos puntos y el nombre del paramentro
    //Ahora aqui si definimos el componente a usar
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

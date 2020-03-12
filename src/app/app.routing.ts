//Importar modulos propios del router de Angular
import { ModuleWithProviders} from '@angular/core';     //  PERMITE GENERAR UN MODULO CON RUTAS Y CARGARLO EN EL FRAMEWORK
import {Routes, RouterModule} from '@angular/router';   //  IMPORTAR LA CLASES QUE PERMITEN GENERAR OBJETOS DE RUTAS

//Importar componentes que seran una página individual del sitio, es decir componentes que se comportan como una pagina
import {HomeSiteComponent} from './components/home-site/home-site.component';
import {MantenimientoUsuariosComponent} from './components/mantenimiento-usuarios/mantenimiento-usuarios.component';
import {PruebaComponent} from './components/prueba/prueba.component';
import {Prueba2Component} from './components/prueba2/prueba2.component';
import {Prueba3Component} from './components/prueba3/prueba3.component';
import {ErrorSiteComponent} from './components/error-site/error-site.component';
import {LoginComponent} from './components/login/login.component';


//DEFINIR ARREGLO DE RUTAS
//Patch vacío es la ruta por defecto
//Path con ** debe ir al final y este se carga cada vez que no se encuentra una ruta
//La ruta a la pagina2 esta 2 veces ya que ocupamos que se pueda acceder con o sin el parametro que recibe desde la url
const appRouter:  Routes = [
  {path:'', component:HomeSiteComponent},
  {path:'home', component:HomeSiteComponent},
  {path:'formulario', component:MantenimientoUsuariosComponent},
  {path:'pagina1', component:PruebaComponent},
  {path:'pagina2', component:Prueba2Component},
  {path:'pagina2/:param0/:param1', component:Prueba2Component},
  {path:'pagina3', component:Prueba3Component},
  {path:'**', component:ErrorSiteComponent},
  {path:'login', component:LoginComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders:   any[]               = []; //Lo establecemos cono servicio
export const routing            :   ModuleWithProviders = RouterModule.forRoot(appRouter); //Cargamos la configuración de rutas predefinidas

//Esto debe cargarse dentro del app.module.ts

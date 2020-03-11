import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { Prueba2Component } from './components/prueba2/prueba2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Prueba3Component } from './components/prueba3/prueba3.component';
//Sin TemplateURL
import { SinTemplate } from './components/compsintemplate/sintemplate.component';

//#region INICIO Angular Materials
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {DemoMaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { CamposFormularioComponent } from './components/campos-formulario/campos-formulario.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SliderformcontrolComponent } from './components/sliderformcontrol/sliderformcontrol.component';
import { SlidertoggleformcontrolComponent } from './components/slidertoggleformcontrol/slidertoggleformcontrol.component';
import { MenuwebcontrolComponent } from './components/menuwebcontrol/menuwebcontrol.component';
import { SideNavControlComponent } from './components/side-nav-control/side-nav-control.component';
import { ExpansionPanelContentComponent } from './components/expansion-panel-content/expansion-panel-content.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { HeaderSiteComponent } from './components/header-site/header-site.component';
import { ErrorSiteComponent } from './components/error-site/error-site.component';
import { FooterSiteComponent } from './components/footer-site/footer-site.component';
import { HomeSiteComponent } from './components/home-site/home-site.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SliderSiteComponent } from './components/slider-site/slider-site.component';
import { HooksDemoComponent } from './components/hooks-demo/hooks-demo.component';
//#endregion

//No se requiere el Import Para Formularios ya que viene en los import de Angular Materials

//AQUI DEBEMOS IMPORTAR LAS RUTAS PERSONALIZADAS QUE CREAMOS EN EL ARCHIVO app.routing.ts
import { routing, appRoutingProviders } from './app.routing';

//Import para gestion de webcam
import {WebcamModule} from 'ngx-webcam'; //Se debe agregar en los import
import { CamaraComponent } from './components/camara/camara.component';
import { MantenimientoUsuariosComponent } from './components/mantenimiento-usuarios/mantenimiento-usuarios.component';
import { UserGridComponent } from './components/user-grid/user-grid.component';

//IMPORTA PARA PIPE PERSONALIZADO
import { TipoEstadoPipe } from './pipes/TipoEstados';

//MANEJO DE SESIONES
import {StorageServiceModule} from 'angular-webstorage-service';

//MANEJO DE NOTIFICACIONES EN PANTALLA
import Swal from 'sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Prueba2Component,
    Prueba3Component,
    SinTemplate,
    CamposFormularioComponent,
    InputComponent,
    RadiobuttonComponent,
    SliderformcontrolComponent,
    SlidertoggleformcontrolComponent,
    MenuwebcontrolComponent,
    SideNavControlComponent,
    ExpansionPanelContentComponent,
    GridListComponent,
    HeaderSiteComponent,
    ErrorSiteComponent,
    FooterSiteComponent,
    HomeSiteComponent,
    UserFormComponent,
    SliderSiteComponent,
    HooksDemoComponent,
    CamaraComponent,
    MantenimientoUsuariosComponent,
    UserGridComponent,
    TipoEstadoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Angular Materials
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    //Gestión de Rutas
    routing,
    //WebCam
    WebcamModule,
    StorageServiceModule
  ],
  exports: [
    TipoEstadoPipe
  ],
  entryComponents: [ Prueba3Component ],
  providers: [
    //Routing
    appRoutingProviders,
    //Angular Materials
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

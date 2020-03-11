import { Component, Output, OnInit, EventEmitter } from '@angular/core';
//1 rxjs: Creation methods, types, schedulers and utilities
import { Observable, Subject } from 'rxjs';
//Import para gestion de la camara con ngx-webcam
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.css']
})
export class MantenimientoUsuariosComponent implements OnInit {

  //#region VARIABLES LOCALES
  public bExpandControl:boolean=false;
  private webImage0:WebcamImage=null;
  @Output() public arResult:WebcamImage[];
  //#endregion

  //#region CONSTRUCTOR DE COMPONENTE
  constructor()
  {
    this.arResult =[
      this.webImage0,
      this.webImage0,
      this.webImage0
    ];
  }
  //#endregion

  //#region HOOKS
  ngOnInit() {

  }
  //#endregion

  //#region IMPLEMENTACION DE METODOS DEL COMPONENTE
  public desplegarPanel(item): void {
    item.toggle();
    //Identificar si el material control esta o no expandido.
    this.bExpandControl=! this.bExpandControl;

  }

  ObtenerParametrosDeSalida(event)
  {
    console.log(event);
    this.arResult = event.arImg;
    console.log(this.arResult);
  }
  //#endregion

  //Fin de componente
}

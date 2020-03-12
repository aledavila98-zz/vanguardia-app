import { Component, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Globals } from '../../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   //#region VARIABLES LOCALES
   public hide = true;
   public bExpandControl:boolean=false;
   private webImage0:WebcamImage=null;
   @Output() public arResult:WebcamImage[];

  constructor(
    private router: Router,
    private globals: Globals
  ) {}

  ngOnInit() {
    this.arResult =[
      this.webImage0,
      this.webImage0,
      this.webImage0
    ];
  }

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

  onSubmit()
  {
    this.router.navigate(['/home']);
    this.globals.logged = true;
  }
  //#endregion
}

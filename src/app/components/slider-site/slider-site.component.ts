//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-site',
  templateUrl: './slider-site.component.html',
  styleUrls: ['./slider-site.component.css']
})
export class SliderSiteComponent implements OnInit {

  //#region VARIABLES LOCALES
  @Input() nombre:string; //Lleva el decorador input para permitir comunicacion con el componente padre
  @Input() sTituloParam:string; //Lleva el decorador input para permitir comunicacion con el componente padre
  @Input() size:string;
  public sMiTitulo:string;
  //#ndregion

  //#region CONSTRUCTOR
  constructor()
  {
    this.sMiTitulo=".";
  }
  //#endregion

  ngOnInit() {
    this.sMiTitulo = this.sTituloParam;
  }

}

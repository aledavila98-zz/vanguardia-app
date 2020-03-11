import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

//Ej. Template Embedida
//template:'<h1>Hello, {{name}}</h1>',

export class PruebaComponent implements OnInit {

  /*#region VARIABLES LOCALES */
  public titulo : string;
  public comentario : string;
  public year : number;
  public bFlag: boolean;
  /*#endregion*/

  /*#region CONSTRUCTOR DE COMPONENTE */
  constructor() {
    this.titulo ="Aplicaciones de vanguardia.";
    this.comentario = "Este componente usa TemplateUrl: ./prueba.component.html";
    this.year = 2020;
    this.bFlag=true;
    console.log("Componente: prueba, cargado satisfactoriamente.");
    console.log(this.titulo, this.comentario, this.year);
  }
  /*#endregion*/
  ocultarContenido(){
    this.bFlag=false;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {
  public titulo : string;
  constructor() {
    this.titulo="Componente: prueba2";
    console.log("Contructor lanzado");
   }

   ngOnInit() {
    console.log("Componente iniciado correctamente.");
  }

  ngDoCheck() {
    console.log("Componente a sufrido un cambio.");
  }

  cambiarTitulo()
  {
      this.titulo = "Componente: prueba2 Ha Cambiado Ahora!";
  }

  ngOnDestroy(){
    console.log("El Componente Será Eliminado.");
  }
//FIN DE COMPONENTE
}

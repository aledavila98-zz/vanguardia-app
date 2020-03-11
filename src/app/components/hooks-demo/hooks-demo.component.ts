import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks-demo',
  templateUrl: './hooks-demo.component.html',
  styleUrls: ['./hooks-demo.component.css']
})
export class HooksDemoComponent implements OnInit
{
  /*#region CONSTRUCTOR DE CLASE*/
  @Input("entrada") entrada:any;
  @ViewChild("mitexto",{static:false}) mitexto:any;
  /*#endregion*/

  /*#region CONSTRUCTOR DE CLASE*/
  constructor()
  {
      //Solo se ejecuta cuando inicializa el componente, por lo tanto aun no se ha inicializado los Html Template
      //O cualquier objeto del DOM
      console.log("Contructor");
  }
  /*#endregion*/

  /*#region IMPLEMENTACION DE  METODOS DE CLASE*/
  ngOnChanges()
  {
    //ejecuta cadaa vez que cambian valores, siempre que sea un input
    console.log("Evento: ngOnChangest");
  }

  ngOnInit()
  {
    //Inicializa el contenido del componente, una solo una vez, es conveniente
    //ya que el DOM ya esta creado en este punto
    console.log("Evento: ngOnInit");
  }

  ngDOCheck()
  {
    //Se ejecuta despues del ngOnChanges, siempre y cuando existan cambios en el componente se volverá a
    //ejecutar, ejemplo puede ayudar a corroborar cuando cambia un valor
    console.log("Evento: ngDoCheck");
  }

  //FUNCIONES AFTER
  ngAfterContentInit()
  {
    //SE EJECUTA AL PROYECTAR EL CONTENIDO ES DECIR CUANDO EL TEMPLATEURL YA SE HA CARGADO
    console.log("Evento: ngAfterContentInit");
  }

  ngAfterContentChecked()
  {
    //SE EJECUTA AL CONFIRMAR EL CONTENIDO PROYECTADO, ESPECIFICAMENTE CUANDO ALGO DEL CONTENIDO HA CAMBIADO
    console.log("Evento: ngAfterContentChecked");
  }

  ngAfterViewInit()
  {
    //INICIALIZA LOS VIEW Y VIEWCHILD
    console.log("Evento: ngAfterViewInit");
  }

  ngAfterViewCheked()
  {
    //SE EJECUTA CUANDO LOS VIEW O VIEWCHILD CAMBIAN
    console.log("Evento: ngAfterViewCheked");
  }

  ngOnDestroy()
  {
    //SE EJECUTA UNA SOLA VEZ ANTES QUE EL COMPONENTE SE DESTRUYA
    console.log("Evento: ngOnDestroy");
  }
  /*#endregion*/

  //Fin de Componente
}

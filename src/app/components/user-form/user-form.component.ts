import { Component, Input, Output, OnInit } from '@angular/core';
//Importar Clase de usuario
import { clsUser } from '../../models/usuario';
//Importar WebCam
import {WebcamImage} from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';


interface Estados {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //#region VARIABLES LOCALES
  public user : clsUser;
  public hide = true;
  //Material Control SideNav
  showFiller = false;
  //WebCam
  public webcamImage: WebcamImage = null;
  public Estado: Estados[] = [
    {value: '0', viewValue: 'Inactivo'},
    {value: '1', viewValue: 'Activo'}
  ];
  //PARAMETRO DE ENTRADA PARA IDENTIFICAR CUANDO ES UN PROCESO DE ACTUALIZAR Y RECIBIR LA INFORMACION
  @Input() public objUsuario:clsUser;
  //#endregion

  //#region CONSTRUCTOR POR DEFECTO
  constructor() {
    this.user = new clsUser('','','','','','','',0,'',null);
    this.user.nEstado=1;
   }
  //#endregion

  //#region IMPLEMENTACION DE HOOKS
  ngOnChanges()
  {
    //ejecuta cadaa vez que cambian valores, siempre que sea un input
    //console.log("Evento: ngOnChangest");
    //console.log(this.objUsuario);
  }

  ngOnInit()
  {
    //Inicializa el contenido del componente, una solo una vez, es conveniente
    //ya que el DOM ya esta creado en este punto
    //console.log("Evento: ngOnInit");
  }

  ngDOCheck()
  {
    //Se ejecuta despues del ngOnChanges, siempre y cuando existan cambios en el componente se volverá a
    //ejecutar, ejemplo puede ayudar a corroborar cuando cambia un valor
    //console.log("Evento: ngDoCheck");
    //console.log(this.objUsuario);
  }

  //FUNCIONES AFTER
  ngAfterContentInit()
  {
    //SE EJECUTA AL PROYECTAR EL CONTENIDO ES DECIR CUANDO EL TEMPLATEURL YA SE HA CARGADO
    //console.log("Evento: ngAfterContentInit");
  }

  ngAfterContentChecked()
  {
    //SE EJECUTA AL CONFIRMAR EL CONTENIDO PROYECTADO, ESPECIFICAMENTE CUANDO ALGO DEL CONTENIDO HA CAMBIADO
    console.log("Evento: ngAfterContentChecked");
    if(this.objUsuario!=null)
    {
      this.user=this.objUsuario;
    }
  }

  ngAfterViewInit()
  {
    //INICIALIZA LOS VIEW Y VIEWCHILD
    //console.log("Evento: ngAfterViewInit");
  }

  ngAfterViewCheked()
  {
    //SE EJECUTA CUANDO LOS VIEW O VIEWCHILD CAMBIAN
    //console.log("Evento: ngAfterViewCheked");
    //console.log(this.objUsuario);
  }

  ngOnDestroy()
  {
    //SE EJECUTA UNA SOLA VEZ ANTES QUE EL COMPONENTE SE DESTRUYA
    console.log("Evento: ngOnDestroy");
  }
  //#endregion


  //#region IMPLEMENTACION DE METODOS PARA EL COMPONENTE
  onSubmit(){
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
  //#endregion

  //Fin de componente
}

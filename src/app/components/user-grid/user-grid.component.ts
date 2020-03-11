import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {clsUser} from '../../models/usuario';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
// CommonJS ESTA CONSTANTE ES REQUERIDA PARA EL USO DE NOTIFICACIONES EN PANTALLA
//const Swal = require('sweetalert2');

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserGridComponent implements OnInit {
  //#region VARIABLES LOCALES
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToHeader  = ['#','Nombre', 'Usuario', 'Clave', 'Correo','Teléfono','Estado'];
  columnsToDisplay = ['#','sUserName', 'sUser', 'sPassword', 'sCorreo','sTel','nEstado'];
  expandedElement: clsUser | null;
  public status:string;
  //#endregion

  //#endregion

  //#region CONTRUCTOR POR DEFECTO
  constructor() { }
  //#endregion

  //#region HOOKS
  ngOnInit() {
  }
  //#endregion

  //#region IMPLEMENTACION DE METODOS DEL CONTROLADOR
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(sId)
  {
    //alert(name);

    //CONFIGURAR ALERTA
    Swal.fire({
      title: "Información!",
      text: "Quieres eliminar el documento de forma permanente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value)
      {
		     //FORMATO DEL MENSAJE
         Swal.fire(
          'Eliminado!',
          'El documento con Id:'+sId+' fue eliminado exitosamente.',
          'success'
          )

      }
    });
  }
  //#endregion

  //FIN DE CONTROLADOR
}


const ELEMENT_DATA: clsUser[] = [
  {
    _id                 : '01',
    sUserName           : 'David',
    sUser               : 'dtejada01',
    sPassword           : 'Hola12345$',
    sCorreo             : 'detm7984@unitec.edu',
    sComprobarPassword  : 'Hola12345$',
    sTel                : '8933-8874',
    nEstado             : 0,
    imgName             : '',
    date                : null
  },
  {
    _id                 : '02',
    sUserName           : 'Tania',
    sUser               : 'ttejada01',
    sPassword           : 'Hola12345$',
    sCorreo             : '1@1.com',
    sComprobarPassword  : 'Hola12345$',
    sTel                : '9999-9999',
    nEstado             : 1,
    imgName             : '',
    date                : null
  },
  {
    _id                 : '03',
    sUserName           : 'Sebastian',
    sUser               : 'stejada01',
    sPassword           : 'Hola12345$',
    sCorreo             : '2@1.com',
    sComprobarPassword  : 'Hola12345$',
    sTel                : '1717-2407',
    nEstado             : 1,
    imgName             : '',
    date                : null
  },
];

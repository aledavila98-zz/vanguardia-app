import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'tipoestado'
})
export class TipoEstadoPipe implements PipeTransform{
    transform(value : any){
      switch(value) {
        case 1:
          return 'Activo';
          break;
        case 0:
          return 'Inactivo';
          break;
          //Fin de CASE
      }
      //Fin De Pipe
    }
  //Fin de export
}

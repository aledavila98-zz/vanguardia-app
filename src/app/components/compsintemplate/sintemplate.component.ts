import { Component } from '@angular/core';

/*NO COLOCAR ; al final del componente*/
/*El uso de llaves dobles es para realizar binding por interpolación*/
@Component({
    selector: 'sin-template',
    template: `
                <h3>==========================================</h3>
                <p>{{titulo}}</p>
                <h3>==========================================</h3>
              `
})

//Tipos de datos soportados : https://www.geeksforgeeks.org/data-types-in-typescript/
export class SinTemplate{
    public titulo : string;

    constructor(){
        this.titulo ="Este es un ejemplo de componente sin usar el TemplateURL.";
        console.log("Componente: SinTemplate, cargado satisfactoriamente.");
        console.log(this.titulo);
    }
}

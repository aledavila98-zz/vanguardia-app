export class clsUser{
  //#region AHORA SOLO SE REQUIERE DECLARAR LOS PARAMETROS DIRECTAMENTE EN EL CONSTRUCTOR
  constructor(
      public _id:string,
      public sUserName:string,
      public sUser: string,
      public sPassword: string,
      public sComprobarPassword: string,
      public sCorreo: string,
      public sTel: string,
      public nEstado: number,
      public imgName:string,
      public date: any //{type: Date}
      ){}
  //#endregion

  //Fin de clase
}

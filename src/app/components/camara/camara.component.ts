import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
//1 rxjs: Creation methods, types, schedulers and utilities
import { Observable, Subject } from 'rxjs';
//Import para gestion de la camara con ngx-webcam
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {

  //#region VARIABLES LOCALES
  @Output() public pictureTaken = new EventEmitter<WebcamImage>();
  @Output() public errors: WebcamInitError[] = [];
  @Output() CargarParametroDeSalida= new EventEmitter();
  public arResult:WebcamImage[] = [];
  @Input() public showWebcam:boolean;

  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };


  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
  //WebCam Requerido para dejar el SNAPSHOT EN EL MISMO CONTROL
  public nIndex:number =0;
  private webImage0:WebcamImage=null;
  //#endregion

  //#region CONSTRUCTOR GENERAL
  constructor() {
    this.arResult =[
      this.webImage0,
      this.webImage0,
      this.webImage0
    ];
    //Seteamos el parametro chowWebCam en falso para evitar que la camara se habilite al abrir la página
    this.showWebcam = false;
  }
  //#endregion

  //#region HOOKS
  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }
  //#endregion

  //#region IMPLEMENTACION DE METODOS DEL COMPONENTE
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  //Agregar Item para lograr el efecto toggle predeterminado del Material Control
  public toggleWebcam(item): void {
    this.showWebcam = !this.showWebcam;
    //Equivalente a drawer.toggle()
    item.toggle();

  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);

    //Modificar para colocar la imagen en el Material Control
    //this.webcamImage0 = webcamImage;
    if(this.nIndex==3)
      this.nIndex=0;
    switch(this.nIndex)
    {
      case 0:
        this.arResult[0] = webcamImage;
        break;
      case 1:
        this.arResult[1] = webcamImage;
        break;
      case 2:
        this.arResult[2] = webcamImage;
        break;
    }
    this.nIndex = this.nIndex+1;
    if(this.arResult[2]!=null)
    {
      //WebcamImage
      this.CargarParametroDeSalida.emit({arImg:this.arResult});
    }

  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  //#endregion

  //Fin de componente
}

import { Component } from '@angular/core';
import { FaceRecognitionService } from '../app/services/face-recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  constructor(private faceRecognitionService: FaceRecognitionService){
    
  }
}

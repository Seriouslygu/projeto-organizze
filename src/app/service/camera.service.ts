import { Injectable } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  photoPadrao: any ="../..assets/img/user.png";
  photo: any=""
  
  constructor() { }

  async takePicture() {

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
      width: 500,
      height: 500,
    });

  }

}

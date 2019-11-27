import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  foto: any;

  constructor(private camera: Camera) {}

  hacerFoto() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((ImageData) => {
      this.foto = 'data:image/jpeg;base64' + ImageData;
    }, (err) => {
      console.log(err);
    });
  }

  capturarFoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }).then(imagenData => {
      this.foto = 'data:image/jpeg;base64' + imagenData;
    });
  }

  buscarFoto() {
    this.camera.getPicture({
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }).then(imagenData => this.foto = 'data:image/jpeg;base64' + imagenData );
  }

}

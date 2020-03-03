import { Component, OnInit } from '@angular/core';
import { CameraService } from 'src/app/services/camera.service';
import { PhotoService } from 'src/app/services/photo.service';
import { AuthService } from 'src/app/services/auth.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private cameraService: CameraService,
    private photoService: PhotoService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  async takePicture() {
    const photoPath = await this.cameraService.takePicture();
    this.photoService.insertPhoto(photoPath);
  }

  removePhoto(path: SafeResourceUrl) {
    this.photoService.removePhoto(path);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email:string;

  constructor(private authService: AuthService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.resetPassword(this.email)
    .then(
      () => {
        this.AlertResetPassword();
        this.router.navigateByUrl("/login");
      }
    ).catch (
      (error) => {
        this.AlertError();
        console.error(error);
        
      }
    );
  }

  async AlertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: 'Se le ha enviado un correo electrónico con un enlace para recuperar la contraseña.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async AlertError() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: 'Se ha producido un error al enviar el correo electrónico para recuperar la contraseña.',
      buttons: ['OK']
    });

    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { Favorito } from 'src/app/model/favorito';
import { FavoritoService } from 'src/app/services/favorito.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos: Favorito[] = [];

  constructor(
    private favoritoService: FavoritoService,
    private router: Router, 
    private alertController: AlertController) { }
 
  ngOnInit() {
    this.favoritoService.getFavoritos().then(
      data=> this.favoritos = data
    );
    //console.log(this.favoritoService.favoritos);
    //console.log(this.favoritos);
  }

    ionViewWillEnter(){
      this.favoritoService.getFavoritos().then(
        data=> this.favoritos = data
      );
      //console.log(this.favoritoService.favoritos);
      //console.log(this.favoritos);
    }



  // Ruta para la pagina de edición
  goEditFav(id: number) {
    this.router.navigateByUrl(
      `/edit${ id != undefined ? '/' + id : ''}`
    );
  }

  // Borrado del equipo favorito con promesa y una vez borrado se recargan los equipos favoritos
  deleteFav(id: number) {
    this.favoritoService.deleteFav(id).then(
    () => this.favoritoService.getFavoritos().then(
    data => this.favoritos = data)
    );
  }


  // Confirmación para borrado
  async presentAlertConfirm(id: number, name: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar equipo favorito',
      message: `Vas a borrar tu equipo <strong>${name}</strong>, ¿Estás seguro?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Sí',
          handler: () => this.deleteFav(id)
        }
      ]
    });
    await alert.present();
  }

}
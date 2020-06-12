import { Component, OnInit, Pipe, Injectable } from '@angular/core';
import { Favorito } from 'src/app/model/favorito';
import { FavoritoService } from 'src/app/services/favorito.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

// import * as _ from 'lodash';

// @Pipe({ name: 'orderby' })

// export class OrderByPipe {
//   transform(array, args) {
//     return _.sortBy(array, args);
//   }
// }


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})

export class FavoritosPage implements OnInit {

  favoritos: Observable<Favorito[]>;

  favoritosOrdenados: Favorito[] = [];
  colorNombre: String = "#FF0000";

  constructor(
    private favoritoService: FavoritoService,
    private router: Router,
    private authService: AuthService, 
    private alertController: AlertController) { }
 
  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      data=> {
        this.favoritos = this.favoritoService.getFavoritos();
        this.favoritos.subscribe(
          arrayfav=> {
            this.favoritosOrdenados = this.ordenaFav(arrayfav);
          }
        );
      }
    );
      
    //console.log(this.favoritoService.favoritos);
    //console.log(this.favoritos);
  }

  addFav() {
    this.router.navigateByUrl('/create-fav');
  }

  // Ruta para la pagina de edición
  goEditFav(id: number) {
    this.router.navigateByUrl(
      `/edit${ id != undefined ? '/' + id : ''}`
    );
  }

  ordenaFav(f: Favorito[]): Favorito[] {
    f.sort((a, b) => (a.puntos < b.puntos) ? 1 : -1);
    return f;
  }

  cambiaColor(c: string): string {
    switch (c.toLowerCase()) {
      case "morado":
        return "#BA00FF";
        break;
        case "rojo":
        return "#FF0000";
        break;
        case "naranja":
        return "#FF8300";
        break;
        case "amarillo":
        return "#FFFE00";
        break;
        case "verde":
        return "#00FF00";
        break;
        case "cian":
        return "#00FFEE";
        break;
        case "azul cielo":
        return "#00C3FF";
        break;
        case "azul":
        return "#0000FF";
        break;
        case "turquesa":
        return "#40E0D0";
        break;
        case "rosa":
        return "#FE97FF";
        break;
        case "fucsia":
        return "#FF00FF";
        break;
        case "negro":
        return "#000000";
        break;
        case "blanco":
        return "#FFFFFF";
        break;
        case "gris":
        return "#808080";
        break;
        case "plata":
        return "#C0C0C0";
        break;
        
    
      default:
        break;
    }

    return ''
  }
  


  // Borrado del equipo favorito con promesa y una vez borrado se recargan los equipos favoritos
  /* deleteFav(id: number) {
    this.favoritoService.deleteFav(id).then(
    () => this.favoritoService.getFavoritos().then(
    data => this.favoritos = data)
    );
  } */

  // Confirmación para borrado
   async presentAlertConfirm(id: string, name: string) {
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
          handler: () => this.favoritoService.deleteFavById(id)
        }
      ]
    });
    await alert.present();
  } 

}
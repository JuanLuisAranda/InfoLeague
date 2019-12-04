import { Injectable } from '@angular/core';
import { Favorito } from '../model/favorito';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  favoritos: Favorito[] = [];

  constructor(private storage: Storage) {

    this.getFavoritos().then(
      data => this.favoritos = data == null ? [] : data)

   }

   getFavoritos(): Promise<Favorito[]> {
    return this.storage.get('favoritos');
    
  }
​
  getFavorito(id: number): Favorito {
    return this.favoritos.filter(f => f.id == id)[0];
  }

    // Guardar el equipo favorito usando una promesa
  saveFav(f: Favorito): Promise<boolean> { 
    if (f.id == undefined) { 
      this.addFav(f);
    } else {
      this.updateFav(f); 
    }
​
    return this.storage.set('favoritos', this.favoritos); 
  }

  // Añadir equipo favorito
  addFav(f: Favorito) {
    let id = 0;
​
    if (this.favoritos.length > 0) {
      id = this.favoritos[this.favoritos.length - 1].id + 1;
    }
    const favToSave = {
      id: id,
      name: f.name.toUpperCase(),
    };
    this.favoritos.push(favToSave);
  }
​
  // Editar equipo favorito
  updateFav(f) {
    const index = this.favoritos.findIndex(
      fAux => fAux.id == f.id
    );
    this.favoritos[index].name = f.name;
  }
​
  // Eliminar equipo favorito
  deleteFav(id: number): Promise<boolean> {
​
    this.favoritos = this.favoritos.filter(f => f.id != id);
    return this.storage.set('favoritos', this.favoritos)
  }

}

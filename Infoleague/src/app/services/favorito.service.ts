import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Favorito } from '../model/favorito';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  userId: string;

  constructor(private db:AngularFirestore,
    private authService: AuthService) { 
      this.authService.getCurrentUser().subscribe(
        data => this.userId = data.uid
      );
     }

     public addFav(fav: Favorito): Promise<DocumentReference> {
       return this.db.collection<Favorito>('users/' + this.userId + '/favoritos').add(fav);
     }

     public ​getFavoritos(): Observable<Favorito[]> {
       return this.db.collection<Favorito>('users/' + this.userId + '/favoritos').snapshotChanges()
       .pipe(
         map(
           snaps => snaps.map(
             snap => <Favorito>{
               id: snap.payload.doc.id,
               ...snap.payload.doc.data()
             }
           )
         )
       );
     }
     public deleteFavById(id: string): Promise<void> {
      return this.db.collection('users/' + this.userId + '/favoritos').doc(id).delete();
    }
  
    public getFavByID(id: string): Observable <Favorito>{
      return this.db.collection('users/' + this.userId + '/favoritos').doc<Favorito>(id).valueChanges();
    }
  
    public updateFavById(id: string, item: Favorito): Promise<void> {
      return this.db.collection('users/' + this.userId + '/favoritos').doc(id).set(item);
    }
  /* getFavorito(id: number): Favorito {
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
  } */

  

  /* // Editar equipo favorito
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
  } */

}

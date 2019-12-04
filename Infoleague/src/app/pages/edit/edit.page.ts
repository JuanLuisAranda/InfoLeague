import { Component, OnInit } from '@angular/core';
import { Favorito } from 'src/app/model/favorito';
import { FavoritoService } from 'src/app/services/favorito.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  favorito: Favorito = {
    name: ''
  };

  constructor(
    private favoritosService: FavoritoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.favorito.name);

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.favorito = this.favoritosService.getFavorito(+id);
    } 
    console.log(this.favoritosService.favoritos);
  }


  saveFav() {
    this.favoritosService.saveFav(this.favorito).then(
      () => this.router.navigateByUrl(`/favoritos`)
    );
    }

}

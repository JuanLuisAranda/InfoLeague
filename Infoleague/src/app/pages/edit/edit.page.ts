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

  pageTitle: string = "Nuevo equipo"
  favorito: Favorito = {
    name: '', colorprincipal: '', jugadores: 0, puntos: 0
  };
  action: string = "Guardar";
  id: string;

  constructor(
    private favoritosService: FavoritoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.favoritosService.getFavByID(this.id).subscribe(
        data => {
          this.favorito = data
          this.pageTitle = "Editar equipo"
          this.action = "Actualizar"
        }
      )
    }
  }


  addFav() {
    if (this.action == "Guardar") {
      this.favoritosService.addFav(this.favorito);
    } else {
      this.favoritosService.updateFavById(this.id, this.favorito)
    }
    this.router.navigateByUrl(`/favoritos`)
  }

}

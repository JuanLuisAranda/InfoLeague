import { Component, OnInit } from '@angular/core';
import { Equipo } from '../model/equipos';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  
  equipos: Equipo[];
  equipo: Equipo;
  name: string;
  image: string;
  isClicked: boolean = false;
  index: number;
  
  
  constructor(private equipoService: EquipoService) {
  }

  ionViewWillEnter() {
    this.equipos = this.equipoService.getequipos();
  }

  muestraDetalles(id: number) {
    this.index = this.equipos.findIndex(e => e.id == id);

    this.equipo = this.equipoService.getequipo(id);
    this.isClicked = !this.isClicked;
  }

}

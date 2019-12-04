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
  name: string;
  image: string;
  
  
  constructor(private equipoService: EquipoService) {
  }

  ionViewWillEnter() {
    this.equipos = this.equipoService.getequipos();
  }

}

import { Injectable } from '@angular/core';
import { Equipo } from '../model/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[];

  constructor() { 
    this.equipos = [
      { "id": 1, "name": 'Real Madrid CF', "escudo": "../../assets/teams/RMCF.png", "estadio": "Santiago Bernabéu", "ciudad": "Madrid", "year": 1902, "ligasWin": 33 },
      { "id": 2, "name": 'Barcelona FC', "escudo": "../assets/teams/FCB.png", "estadio": "Camp Nou", "ciudad": "Barcelona", "year": 1899, "ligasWin": 25 },
      { "id": 3, "name": 'Sevilla CF', "escudo": "../../assets/teams/SFC.png" },
      { "id": 4, "name": 'Atlético de Madrid', "escudo": "../../assets/teams/ATM.png" },
      { "id": 5, "name": 'Athletic Club de Bilbao', "escudo": "../../assets/teams/ATH.png" },
      { "id": 6, "name": 'Real Sociedad', "escudo": "../../assets/teams/RSO.png" },
      { "id": 7, "name": 'Getafe CF', "escudo": "../../assets/teams/GTF.png" },
      { "id": 8, "name": 'Granada CF', "escudo": "../../assets/teams/GRA.png" },
      { "id": 9, "name": 'Levante UD', "escudo": "../../assets/teams/LEV.png" },
      { "id": 10, "name": 'Villarreal CF', "escudo": "../../assets/teams/VIL.png" },
      { "id": 11, "name": 'Alavés', "escudo": "../../assets/teams/ALA.png" },
      { "id": 12, "name": 'Valladolid CF', "escudo": "../../assets/teams/VAL.png" },
      { "id": 13, "name": 'Real Betis Balompié', "escudo": "../../assets/teams/BET.png" },
      { "id": 14, "name": 'Eibar', "escudo": "../../assets/teams/EIB.png" },
      { "id": 15, "name": 'RCD Mallorca', "escudo": "../../assets/teams/MAL.png" },
      { "id": 16, "name": 'Celta de Vigo', "escudo": "../../assets/teams/CEL.png" },
      { "id": 17, "name": 'RCD Espanyol', "escudo": "../../assets/teams/ESP.png" },
      { "id": 18, "name": 'Leganés', "escudo": "../../assets/teams/LEG.png" },
      { "id": 19, "name": 'Valencia CF', "escudo": "../../assets/teams/VAL.png" },
      { "id": 20, "name": 'Osasuna', "escudo": "../../assets/teams/OSA.png" },
    ]
  }
  getequipos(): Equipo[] {
    return this.equipos;
  }

  getequipo(id: number) {
    return this.equipos.filter(e => e.id == id)[0];
  }

}

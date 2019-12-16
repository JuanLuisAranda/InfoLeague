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
      { "id": 3, "name": 'Sevilla CF', "escudo": "../../assets/teams/SFC.png", "estadio": "Ramón Sánchez Pizjuán", "ciudad": "Sevilla", "year": 1890, "ligasWin": 1 },
      { "id": 4, "name": 'Atlético de Madrid', "escudo": "../../assets/teams/ATM.png", "estadio": "Wanda Metropolitano", "ciudad": "Madrid", "year": 1903, "ligasWin": 10 },
      { "id": 5, "name": 'Athletic Club de Bilbao', "escudo": "../../assets/teams/ATH.png", "estadio": "Ramón Sánchez Pizjuán", "ciudad": "Sevilla", "year": 1890, "ligasWin": 8 },
      { "id": 6, "name": 'Real Sociedad', "escudo": "../../assets/teams/RSO.png", "estadio": "Anoeta", "ciudad": "San Sebastián", "year": 1909, "ligasWin": 2 },
      { "id": 7, "name": 'Getafe CF', "escudo": "../../assets/teams/GTF.png", "estadio": "Coliseum Alfonso Pérez", "ciudad": "Madrid", "year": 1923, "ligasWin": 0 },
      { "id": 8, "name": 'Granada CF', "escudo": "../../assets/teams/GRA.png", "estadio": "Nuevo Los Cármenes", "ciudad": "Granada", "year": 1931, "ligasWin": 0 },
      { "id": 9, "name": 'Levante UD', "escudo": "../../assets/teams/LEV.png","estadio": "Ciutat de Valencia", "ciudad": "Valencia", "year": 1909, "ligasWin": 0 },
      { "id": 10, "name": 'Villarreal CF', "escudo": "../../assets/teams/VIL.png", "estadio": "Estadio de la Cerámica", "ciudad": "Villareal", "year": 1923, "ligasWin": 0 },
      { "id": 11, "name": 'Alavés', "escudo": "../../assets/teams/ALA.png", "estadio": "Mendizorroza", "ciudad": "Vitoria", "year": 1921, "ligasWin": 0 },
      { "id": 12, "name": 'Valladolid CF', "escudo": "../../assets/teams/VAL.png", "estadio": "Municipal José Zorrilla", "ciudad": "Valladolid", "year": 1928, "ligasWin": 0 },
      { "id": 13, "name": 'Real Betis Balompié', "escudo": "../../assets/teams/BET.png", "estadio": "Benito Villamarín", "ciudad": "Sevilla", "year": 1907, "ligasWin": 1 },
      { "id": 14, "name": 'Eibar', "escudo": "../../assets/teams/EIB.png", "estadio": "Municipal de Ipurua", "ciudad": "Eibar", "year": 1940, "ligasWin": 0 },
      { "id": 15, "name": 'RCD Mallorca', "escudo": "../../assets/teams/MAL.png", "estadio": "Son Moix", "ciudad": "Palma de Mallorca", "year": 1916, "ligasWin": 0 },
      { "id": 16, "name": 'Celta de Vigo', "escudo": "../../assets/teams/CEL.png", "estadio": "Abanca Balaídos", "ciudad": "Vigo", "year": 1923, "ligasWin": 0 },
      { "id": 17, "name": 'RCD Espanyol', "escudo": "../../assets/teams/ESP.png", "estadio": "RCDE Stadium", "ciudad": "Cornellá de Llobregat", "year": 1900, "ligasWin": 0 },
      { "id": 18, "name": 'Leganés', "escudo": "../../assets/teams/LEG.png", "estadio": "Municipal de Butarque", "ciudad": "Leganés", "year": 1928, "ligasWin": 0 },
      { "id": 19, "name": 'Valencia CF', "escudo": "../../assets/teams/VCF.png", "estadio": "Mestalla", "ciudad": "Valencia", "year": 1919, "ligasWin": 6 },
      { "id": 20, "name": 'Osasuna', "escudo": "../../assets/teams/OSA.png", "estadio": "El Sadar", "ciudad": "Pamplona", "year": 1920, "ligasWin": 0 },
    ]
  }
  getequipos(): Equipo[] {
    return this.equipos;
  }

  getequipo(id: number) {
    return this.equipos.filter(e => e.id == id)[0];
  }

}

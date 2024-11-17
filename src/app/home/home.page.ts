import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cantidadQuetzales: number | null = null;
  resultado: number | null = null;
  tasaCambio: number = 8; // 8 quetzales por dólar

  constructor() {}

  convertir() {
    if (this.cantidadQuetzales !== null && this.cantidadQuetzales > 0) {
      this.resultado = this.cantidadQuetzales * this.tasaCambio;
    } else {
      this.resultado = null;
    }
  }
}

import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }
  contador1: number = 0;
  aumentar(): void {
    this.contador1 = this.contador1 + 2;
  }
  disminuir(): void {
    this.contador1 = this.contador1 - 2;
  }
  reiniciar(): void {
    this.contador1 = 0;
  }
  contador2: number = 0;
  aumentar2(): void {
    this.contador2 = this.contador2 + 3;
  }
  disminuir2(): void {
    this.contador2 = this.contador2 - 3;
  }
  reiniciar2(): void {
    this.contador2 = 0;
  }
  contador3: number = 0;
  aumentar3(): void {
    this.contador3 = this.contador3 + 5;
  }
  disminuir3(): void {
    this.contador3 = this.contador3 - 5;
  }
  reiniciar3(): void {
    this.contador3 = 0;
  }
  contador4: number = 0;
  aumentar4(): void {
    this.contador4 = this.contador4 + 7;
  }
  disminuir4(): void {
    this.contador4 = this.contador4 - 7;
  }
  reiniciar4(): void {
    this.contador4 = 0;
  }
  contador5: number = 0;
  aumentar5(): void {
    this.contador5 = this.contador5 + 10;
  }
  disminuir5(): void {
    this.contador5 = this.contador5 - 10;
  }
  reiniciar5(): void {
    this.contador5 = 0;
  }

  // Estado para el número primo actual
  numeroPrimo: number = 0;
  private numeroActual: number = 1;

  // Función auxiliar para comprobar si un número es primo
  private esPrimo(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2, raiz = Math.sqrt(num); i <= raiz; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Función para obtener y avanzar al siguiente número primo
  siguientePrimo(): void {
    while (true) {
      this.numeroActual++;
      if (this.esPrimo(this.numeroActual)) {
        this.numeroPrimo = this.numeroActual;
        break;
      }
    }
  }

  // Función para reiniciar la secuencia de primos
  reiniciarPrimo(): void {
    this.numeroActual = 1;
    this.numeroPrimo = 0;
  }

}

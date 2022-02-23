import { Component, Input } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent  {

  @Input() heroe!: Heroe; // el signo ! es para decirle que siempre va a tener un heroe

}

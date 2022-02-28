import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if( heroe.id && heroe.id.includes('-') ) {
      console.log("pip")
      return `assets/heroes/${heroe.id}.jpg`;
    }else if ( heroe.alt_img ) {
      return heroe.alt_img;
    }else{
      return 'assets/no-image.png'
    }
    
  }

}

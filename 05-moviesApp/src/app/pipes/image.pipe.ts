import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string,size: string = 'w500'): unknown {
    if (!img){
      return './assets/no-image-banner.jpg';
    }
    const imgURL = `${environment.imgPath}${size}${img}`
    return imgURL;
  }

}

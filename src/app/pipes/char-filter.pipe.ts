import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charFilter'
})
export class CharFilterPipe implements PipeTransform {

  transform(myArray: any[], text: string, col:string = 'name'): any[] {
    if (text == '' || !myArray) return myArray;
    text = text.toLowerCase();
    return myArray.filter(data => data[col].toLowerCase().includes( text ));
  }

}

import { Pipe, PipeTransform } from "@angular/core";
import { Color } from '../interfaces/ventas.interfaces';

@Pipe({
    name: 'color'
})
export class ColorPipe implements PipeTransform {
    transform(valor: number):string {
        return Color[valor];
    }
}
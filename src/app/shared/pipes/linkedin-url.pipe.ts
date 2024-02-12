import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkedinUrl'
})
export class LinkedinUrlPipe implements PipeTransform {
  transform(value: string): boolean {
    // Expresión regular para validar una URL de LinkedIn
    const linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;

    // True si la cadena cumple con una URL de LinkedIn
    return linkedinUrlPattern.test(value);
  }
}

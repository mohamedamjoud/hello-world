import { Directive,HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el?:ElementRef) { }

  @HostListener('blur') onBlur(){
    if(this.format == 'uppercase')
    {
      console.log(this.format);
      let val : string =this.el.nativeElement.value;
      this.el.nativeElement.value = val.toUpperCase();
    }
    else if (this.format == 'lowercase')
    {
      console.log(this.format);
      let val : string =this.el.nativeElement.value;
      this.el.nativeElement.value = val.toLowerCase();
    }
 
  }
}

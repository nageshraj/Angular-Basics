import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  //ng g directive / d name of directive 
  constructor(private el:ElementRef) {
    // let elemnt = el.nativeElement.style;
    // elemnt.backgroundColor='green';
    // elemnt.color='white';
    
       }
    @HostListener('mouseenter') onMouseEnter(){
      this.highlightColor('yellow');
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.highlightColor(null);
    }


  private highlightColor(color:string):void{
    this.el.nativeElement.style.backgroundColor = color;
  }

}

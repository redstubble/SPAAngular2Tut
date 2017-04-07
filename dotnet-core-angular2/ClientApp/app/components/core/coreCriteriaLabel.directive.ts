import { Directive, Renderer, ElementRef } from '@angular/core';
@Directive({
    selector: '[myLabel]',
    inputs: ['myLabel']
})

export class CriteriaLabelDirective  {
    //@Input('myLabel') myLabel;

    constructor(private renderer: Renderer, private el: ElementRef) {
        //this.nativeElement = el.nativeElement;
        this.renderer.setElementStyle(this.el.nativeElement, 'padding', '6px 0');
    }

    //private nativeElement: Node;
}
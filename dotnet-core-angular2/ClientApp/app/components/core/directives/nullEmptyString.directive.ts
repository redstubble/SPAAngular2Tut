import { Directive, EventEmitter, HostListener, ElementRef  } from '@angular/core';
@Directive({
    selector: '[nullifyEmptyString]',
    inputs: ['nullifyEmptyString']
})

export class CriteriaNullifyEmptyStringDirective  {
    //@Input('myLabel') myLabel;

    constructor(private el: ElementRef) { }

    @HostListener('keyup') OnKeyUp() {
        let val = this.el.nativeElement.value;
        if (val.length === 0)
            val = null;
    }




    //private nativeElement: Node;
}
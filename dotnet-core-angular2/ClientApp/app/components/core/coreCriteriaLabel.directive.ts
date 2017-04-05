import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ selector: '[myLabel]' })



export class CriteriaLabelDirective {

    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.style.padding = '6px 0';
    }

    @Input('myLabel') myLabel: string = '6px 0';
    constructor(private el: ElementRef) { }

}


//export class CriteriaLabelDirective {
//    @Input('myLabel') highlightColor: string;
//    constructor(private el: ElementRef) { }
//    @HostListener('mouseenter') onMouseEnter() {
//        this.highlight(this.highlightColor || 'red');
//    }
//    @HostListener('mouseleave') onMouseLeave() {
//        this.highlight(null);
//    }
//    private highlight(color: string) {
//        this.el.nativeElement.style.backgroundColor = color;
//    }
//}
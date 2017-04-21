import { ElementRef, Component, OnChanges, forwardRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreDataService } from '../core.service'
import { Http } from '@angular/http';


@Component({
    selector: 'inputComponent',
    templateUrl: './input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        },
    ]
})

export class InputComponent implements ControlValueAccessor {

    @Input() maxLength: number;
    @Input() inputValue = 'test';


    @ViewChild("myInput")
    input: ElementRef;

    @HostListener('keyup', ['$event']) OnKeyUp() {
        this.inputValue = this.input.nativeElement.value;
        if (this.inputValue.length === 0)
            this.inputValue = null;
        this.propagateChange(this.inputValue);
    }


    public defaultValue: string;

    //From ControlValueAccessor interface
    writeValue(value: any) { // called when form is initialised with form initial value.
        //if (value !== undefined)
        //    this.inputValue = value;
    }

    ngOnInit() {
    };

    propagateChange = (_: any) => { };

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        debugger;
        this.propagateChange = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {

    }
    
}
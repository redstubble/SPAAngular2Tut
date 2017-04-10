import { Component, OnChanges, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreDataService } from '../core.service'

import { Http } from '@angular/http';

interface DropDownList {
    text: string;
    value: any;
}

@Component({
    selector: 'dropDownList',
    templateUrl: './dropDownList.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownListComponent),
            multi: true
        },
    ]
})

export class DropDownListComponent implements ControlValueAccessor, OnInit  {

    @Input() selectType;
    @Input() url;
    

    public listOptions: { [id: string]: DropDownList } = {
        'All': {
            text : 'All',
            value : 0
        },
        'Select': {
            text: 'Please Select',
            value: -1
        },
    };

    public useIndex: Boolean = false;

    public items: DropDownList[];

    public item: DropDownList;

    public selectedItem: string;

    pushDefaultItem = function () {
        let item = this.listOptions[this.selectType];
        this.useIndex = (typeof this.items[0].value === "number") ? true : false;
        this.selectedItem = item;
        this.items.unshift(item)
    }

    constructor(private http: Http
        //, private coreService: CoreDataService
    ) {
        
    };

    ngOnInit() {
        this.http.get(this.url).subscribe(
            result => { this.items = result.json() as DropDownList[]; },
            error => {
                //coreService.handleError // causing cookie errors
            },
            () => { this.pushDefaultItem(); }
        )
    };


    onChange(val) {
        this.selectedItem = val;
        this.propagateChange(this.selectedItem);
    }

    //From ControlValueAccessor interface
    writeValue(value: any) { // called when form is initialised with form initial value.
        if (value !== undefined)
            this.item = value;
    }

    propagateChange = (_: any) => { };

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {

    }

}
//https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html

enum DropDownListType {
    String = 0,
    Int = 1
}

interface DropDownListItem {
    text: string;
    value: any;
    selected: boolean;
}

interface DropDownList {
    items: DropDownListItem[],
    type: DropDownListType
}

import { Component, OnChanges, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreDataService } from '../core.service'
import { Http } from '@angular/http';

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
    
    public listOptions: { [id: string]: DropDownListItem } = {
        'All': {
            text : 'All',
            value: 0,
            selected: true,
        },
        'Select': {
            text: 'Please Select',
            value: -1,
            selected:true
        },
    };

    public selectList: DropDownList;

    public item: DropDownListItem;

    public selectedItem: string;

    pushDefaultItem = function () {
        if (this.selectType != null) {
            let item: DropDownListItem = this.listOptions[this.selectType];
            this.selectList.items.unshift(item);
            this.writeValue(item.value);
        };
    }

    constructor(private http: Http) {};

    ngOnInit() {

        this.http.get(this.url).subscribe(
            result => {
                this.selectList = result.json() as DropDownList;
            },
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
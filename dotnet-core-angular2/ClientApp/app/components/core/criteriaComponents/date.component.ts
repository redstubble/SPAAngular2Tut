import { Component, OnChanges, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreDataService } from '../core.service'
import { Http } from '@angular/http';

interface DropDownList {
    text: string;
    value: any;
}

@Component({
    selector: 'dateComponent',
    templateUrl: './date.component.html',
})
export class dateComponent
{

}

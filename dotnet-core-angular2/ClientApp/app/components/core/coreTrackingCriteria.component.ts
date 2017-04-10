import { Component, OnInit, EventEmitter, Input} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from './criteriaComponents/dropDownList.component'
import { CoreDataService } from './core.service'
import { Http } from '@angular/http';

@Component({
    selector: 'core-criteria',
    templateUrl: './coreTrackingCriteria.component.html',
    styleUrls: ['./coreTrackingCriteria.component.css']
})
export class CoreTrackingCriteriaComponent implements OnInit {

    public trackingForm: FormGroup;
    
    constructor(private http: Http, private fb: FormBuilder, private coreService: CoreDataService) {
    };

    ngOnInit() {
        this.createForm();
    }

    public createForm() {
        this.trackingForm = this.fb.group({
            readerOrg: [],
            location: ['', Validators.required],
            subLocation: ['', Validators.required],
            tagID: ['', Validators.required],
            equipNo: ['', Validators.required],
            equipCat: ['', Validators.required],
            equipType: ['', Validators.required],
            fromDate: ['', Validators.required],
            toDate: ['', Validators.required]
        });
    };

    public search() {
        debugger;
        //this.secretLairs.push(this.fb.group(new Address()));
    }

    public clear() {
        //this.secretLairs.push(this.fb.group(new Address()));
    }

    public export() {
        //this.secretLairs.push(this.fb.group(new Address()));
    }

}


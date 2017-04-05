import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'core-criteria',
    templateUrl: './coreTrackingCriteria.component.html',
    styleUrls: ['./coreTrackingCriteria.component.css']
})
export class CoreTrackingCriteriaComponent {

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    color: string = 'blue';

    trackingForm: FormGroup;

    createForm() {
        this.trackingForm = this.fb.group({
            readerOrg: ['', Validators.required],
            location: ['', Validators.required],
            //name: ['', Validators.required], // <--- the FormControl called "name"
            //secretLairs: this.fb.array([]),
            ////address: this.fb.group({ // <-- the child FormGroup
            ////    street: '',
            ////    city: '',
            ////    state: '',
            ////    zip: ''
            ////}),
            //power: '',
            //sidekick: ''
        });
    }

}
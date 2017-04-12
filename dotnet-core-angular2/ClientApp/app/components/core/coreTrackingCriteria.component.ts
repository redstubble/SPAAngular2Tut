import { Component, OnInit, EventEmitter, Input} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from './criteriaComponents/dropDownList.component'
import { CoreDataService } from './core.service'
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'


@Component({
    selector: 'core-criteria',
    templateUrl: './coreTrackingCriteria.component.html',
    styleUrls: ['./coreTrackingCriteria.component.css']
})
export class CoreTrackingCriteriaComponent implements OnInit {

    public trackingForm: FormGroup;
    public postURL: string = '/api/Tracking/searchTracking';

    onSubmit(data, event) {
        event.preventDefault();
        console.log(this.trackingForm.value, this.trackingForm.valid)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let jsonData = JSON.stringify(data.value);
        debugger;
        return this.http.post(this.postURL, jsonData, options)
            .map((res: Response) => {
            })
            .catch(this.handleError).subscribe(r => { })
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    private extractData(res) {
        let body = res.json();
        return body.data || {};
    }



    constructor(private http: Http, private fb: FormBuilder, private coreService: CoreDataService) {};

    ngOnInit() {
        this.createForm();
    }

    onSelectToDate(date: Date) {
        this.trackingForm.controls['toDate'].setValue(date);
    };

    onSelectFromDate(date: Date) {
        this.trackingForm.controls['fromDate'].setValue(date);
    };

    public createForm() {
        this.trackingForm = this.fb.group({
            readerOrg: [],
            location: ['', [Validators.required, Validators.maxLength(3)]],
            subLocation: ['', Validators.required],
            tagID: ['', Validators.required],
            equipNo: ['', Validators.required],
            equipCat: ['', Validators.required],
            equipType: ['', Validators.required],
            fromDate: ['', Validators.required],
            toDate: ['', Validators.required],
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


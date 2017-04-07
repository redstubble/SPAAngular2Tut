import { Component, OnInit, EventEmitter, Input} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreDataService } from './core.service'
import { Http } from '@angular/http';

interface DropDownLis {
    value: number;
    text: string;
}

@Component({
    selector: 'core-criteria',
    templateUrl: './coreTrackingCriteria.component.html',
    styleUrls: ['./coreTrackingCriteria.component.css']
})
export class CoreTrackingCriteriaComponent implements OnInit {
    @Input('DDLType') DDLType: string;
    public color: string = 'blue';
    public trackingForm: FormGroup;
    public readerOrgs: DropDownLis[];
    
    constructor(private http: Http, private fb: FormBuilder, private coreService: CoreDataService) {
        this.http.get('/api/Tracking/GetReaderOrgs').subscribe(
            result => { this.readerOrgs = result.json() as DropDownLis[]; },
            error => { this.handleError },
            () => { this.readerOrgs.push({value: 0, text: 'All'}) }
            )
    }

    ngOnInit() {
        //var t = this.coreService.readerOrgs;

        this.createForm();
        //this.readerOrgs = this.coreService.getReaderOrgs();
        ////const selectedOrg = this.readerOrgs.find(a => a.value === this.readerOrgResponse.readerOrg.value)
        //this.readerOrgResponse.readerOrg.value = selectedOrg;
        //(<FormGroup>this.trackingForm).setValue(this.readerOrgResponse, { onlySelf: true });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
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
        //this.secretLairs.push(this.fb.group(new Address()));
    }

    public clear() {
        //this.secretLairs.push(this.fb.group(new Address()));
    }

    public export() {
        //this.secretLairs.push(this.fb.group(new Address()));
    }

}


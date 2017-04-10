import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
@Injectable()


export class CoreDataService {
    //private getReaderOrgsUrl = '/api/Tracking/GetReaderOrgs';

    //public readerOrgs: DropDownList[];

    constructor(private http: Http) {
        //http.get('/api/Tracking/GetReaderOrgs').subscribe(result => {
        //    this.readerOrgs = result.json() as DropDownList[];
        //});
    };

    //public getReaderOrgs(): Promise<DropDownList[]> {
    //    return this.http.get(this.getReaderOrgsUrl)
    //        .toPromise()
    //        .then(response => response.json().data as DropDownList[])
    //        .catch(this.handleError);
    //}



    public handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


//getHeroes(): Promise < Hero[] > {
//    return Promise.resolve(HEROES);
//}

//getHeroes(): Promise < Hero[] > {
//    return this.http.get(this.heroesUrl)
//        .toPromise()
//        .then(response => response.json().data as Hero[])
//        .catch(this.handleError);
//}


export interface DropDownList {
    value: number;
    text: string;
}
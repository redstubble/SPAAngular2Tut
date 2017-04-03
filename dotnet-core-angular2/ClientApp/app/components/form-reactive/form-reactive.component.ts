import { Input, OnChanges, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from './data.service'
import { Address, Hero, states } from './data-model';

@Component({
    selector: 'hero-form',
    templateUrl: './form-reactive.component.html'
})

export class HeroFormReactiveComponent implements OnChanges {
    @Input() hero: Hero;

    states = states;
    heroForm: FormGroup; // <--- heroForm is of type FormGroup

    constructor(private fb: FormBuilder, private heroService: DataService) { // <--- inject FormBuilder
        this.createForm();
        this.logNameChange();
    }

    ngOnChanges() {
        this.heroForm.reset({
            name: this.hero.name,
            //secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
            //address: this.hero.addresses[0] || new Address()
        });
        this.setAddresses(this.hero.addresses);
    }

    setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this.fb.group(address));
        const addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    }

    get secretLairs(): FormArray {
        return this.heroForm.get('secretLairs') as FormArray;
    };

    addLair() {
        this.secretLairs.push(this.fb.group(new Address()));
    }

    nameChangeLog: string[] = [];
    logNameChange() {
        const nameControl = this.heroForm.get('name');
        nameControl.valueChanges.forEach(
            (value: string) => this.nameChangeLog.push(value)
        );
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required], // <--- the FormControl called "name"
            secretLairs: this.fb.array([]),
            //address: this.fb.group({ // <-- the child FormGroup
            //    street: '',
            //    city: '',
            //    state: '',
            //    zip: ''
            //}),
            power: '',
            sidekick: ''
        });
    }

    prepareSaveHero(): Hero {
        const formModel = this.heroForm.value;

        // deep copy of form model lairs
        const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
            (address: Address) => Object.assign({}, address)
        );

        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        const saveHero: Hero = {
            id: this.hero.id,
            name: formModel.name as string,
            // addresses: formModel.secretLairs // <-- bad!
            addresses: secretLairsDeepCopy
        };
        return saveHero;
    }


    onSubmit() {
        this.hero = this.prepareSaveHero();
        this.heroService.updateHero(this.hero).subscribe(/* error handling */);
        this.ngOnChanges();
    }

    revert() { this.ngOnChanges(); }

}
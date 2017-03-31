import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states } from './data-model';

@Component({
    selector: 'hero-form',
    templateUrl: './form-reactive.component.html'
})
export class HeroFormReactiveComponent {
    //heroForm = new FormGroup({
    //    name: new FormControl()
    //});

    states = states;
    heroForm: FormGroup; // <--- heroForm is of type FormGroup

    constructor(private fb: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required], // <--- the FormControl called "name"
            address: this.fb.group({ // <-- the child FormGroup
                street: '',
                city: '',
                state: '',
                zip: ''
            }),
            power: '',
            sidekick: ''
        });
    }

}
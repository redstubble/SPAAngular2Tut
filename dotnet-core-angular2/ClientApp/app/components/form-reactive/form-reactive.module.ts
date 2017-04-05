import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormReactiveRoutingModule } from './form-reactive-routing.module';
import { HeroFormReactiveComponent } from './form-reactive.component';
import { HeroFormReactiveMainComponent } from './form-main.component';
import { ReactiveListComponent } from './hero-list.component';
import { DataService } from './data.service';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormReactiveRoutingModule],
    declarations: [
        HeroFormReactiveComponent,
        HeroFormReactiveMainComponent,
        ReactiveListComponent
    ],
    exports: [
        HeroFormReactiveComponent,
        HeroFormReactiveMainComponent
    ],
    providers: [DataService]
})
export class ReactiveFormModule { }
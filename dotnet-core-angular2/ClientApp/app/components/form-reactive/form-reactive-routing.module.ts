import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroFormReactiveMainComponent } from './form-main.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HeroFormReactiveMainComponent },
        //{ path: '', redirectTo: 'core-tracking', pathMatch: 'full' },
    ])],
    exports: [RouterModule]
})
export class FormReactiveRoutingModule { }
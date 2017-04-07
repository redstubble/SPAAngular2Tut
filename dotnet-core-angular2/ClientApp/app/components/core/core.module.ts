import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './core-routing.module';
import { CoreTrackingMainComponent } from './coreTrackingMain.component';
import { CoreTrackingCriteriaComponent } from './coreTrackingCriteria.component';
import { CriteriaLabelDirective } from './coreCriteriaLabel.directive';
import { HighlightDirective } from './coreCriteriaHighlight.directive';
import { DatepickerModule } from 'angular2-material-datepicker'

import { CoreDataService } from './core.service';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContactRoutingModule,
        DatepickerModule,
    ],
    declarations: [
        CoreTrackingMainComponent,
        CoreTrackingCriteriaComponent,
        CriteriaLabelDirective,
        HighlightDirective,
    ],
    exports: [
        CoreTrackingMainComponent,
        CoreTrackingCriteriaComponent
    ],
    providers: [CoreDataService]
})
export class CoreModule { }
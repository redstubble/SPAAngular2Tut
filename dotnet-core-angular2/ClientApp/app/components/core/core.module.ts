import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './core-routing.module';

import { CoreTrackingMainComponent } from './coreTrackingMain.component';
import { CoreTrackingCriteriaComponent } from './coreTrackingCriteria.component';
import { CriteriaLabelDirective } from './coreCriteriaLabel.directive';
import { HighlightDirective } from './coreCriteriaHighlight.directive';


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, ContactRoutingModule],
    declarations: [
        CoreTrackingMainComponent,
        CoreTrackingCriteriaComponent,
        CriteriaLabelDirective,
        HighlightDirective,
    ],
    exports: [
        CoreTrackingMainComponent,
        CoreTrackingCriteriaComponent
    ]
})
export class CoreModule { }
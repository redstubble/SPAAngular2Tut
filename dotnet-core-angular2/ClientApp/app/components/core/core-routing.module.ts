import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreTrackingMainComponent } from './coreTrackingMain.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CoreTrackingMainComponent }
    ])],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
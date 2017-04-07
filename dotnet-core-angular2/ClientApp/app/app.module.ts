import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeroDetailComponent } from './components/hero/hero-detail.component';
import { HeroListComponent } from './components/hero/hero-list.component';
import { HeroService } from './components/hero/hero.service';
import { HeroDashboardComponent } from './components/hero/hero-dashboard.component';
import { HeroMainComponent } from './components/hero/hero-main.component';
import { HeroFormComponent } from './components/form/hero-form.component';

import { ReactiveFormModule } from './components/form-reactive/form-reactive.module';

import { CoreModule } from './components/core/core.module';




import { AppRoutingModule } from './app.routes'

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        HttpModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CoreModule,
        ReactiveFormModule,

    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent, 
        HeroDetailComponent,
        HeroListComponent,
        HeroDashboardComponent,
        HeroMainComponent,
        HeroFormComponent,
    ],
    providers: [HeroService]
})

export class AppModule {}

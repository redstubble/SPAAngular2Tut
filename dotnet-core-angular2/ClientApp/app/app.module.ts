import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeroDetailComponent } from './components/hero/hero-detail.component';
import { HeroListComponent } from './components/hero/hero-list.component';
import { FormsModule } from '@angular/forms';
import { HeroService } from './components/hero/hero.service';
import { HeroDashboardComponent } from './components/hero/hero-dashboard.component';
import { HeroMainComponent } from './components/hero/hero-main.component'

import { routing } from './app.routes'


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent, 
        HeroDetailComponent,
        HeroListComponent,
        HeroDashboardComponent,
        HeroMainComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        routing,
        //RouterModule.forRoot([
        //    { path: '', redirectTo: 'home', pathMatch: 'full' },
        //    { path: 'home', component: HomeComponent },
        //    { path: 'counter', component: CounterComponent },
        //    { path: 'fetch-data', component: FetchDataComponent },
        //    { path: 'hero', component: HeroDashboardComponent },
        //    { path: '**', redirectTo: 'home' },
        //]),
    ],
    providers: [HeroService]
})



export class AppModule {

}

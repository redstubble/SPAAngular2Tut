import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeroDetailComponent } from './components/hero/hero-detail.component';
import { HeroListComponent } from './components/hero/hero-list.component';
import { HeroDashboardComponent } from './components/hero/hero-dashboard.component';
import { HeroMainComponent } from './components/hero/hero-main.component'


export const routes: Routes = [
    { path: '', redirectTo: 'hero/dashboard', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    {
        path: 'hero',
        component: HeroMainComponent,
        children: [
            { path: '', component: HeroListComponent }, // url: hero/
            { path: 'dashboard', component: HeroDashboardComponent },
            { path: 'detail/:id', component: HeroDetailComponent },
        ]
    },
    { path: '**', redirectTo: 'home' }
]

export const routing = RouterModule.forRoot(routes);
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Hero, Address} from './data-model';
import { DataService } from './data.service';
@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html'
})
export class ReactiveListComponent implements OnInit {
    heroes: Observable<Hero[]>;
    isLoading = false;
    selectedHero: Hero;
    constructor(private heroService: DataService) { }
    ngOnInit() { this.getHeroes(); }
    getHeroes() {
        this.isLoading = true;
        this.heroes = this.heroService.getHeroes()
            // Todo: error handling
            .finally(() => this.isLoading = false);
        this.selectedHero = undefined;
    }

    select(hero: Hero) {
        this.selectedHero = hero;
    }

}
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
    selector: 'my-heroes',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css'],
})

export class HeroListComponent {

    constructor(private heroService: HeroService) { }

    heroes: Hero[];

    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    };

    ngOnInit(): void {
        this.getHeroes();
    };
};




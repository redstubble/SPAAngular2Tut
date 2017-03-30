import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
    selector: 'my-heroes',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css'],
})

export class HeroListComponent {

    constructor(private heroService: HeroService, private router: Router) {

    }

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

    gotoDetail(): void {
        this.router.navigate(['hero/detail', this.selectedHero.id])
    }
};




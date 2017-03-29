﻿import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './hero-dashboard.component.html'
})
export class HeroDashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
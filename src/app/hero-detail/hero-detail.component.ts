import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HeroService} from './hero.service';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  // templateUrl: './hero-detail.component.html',
  template: `
  <div *ngIf="hero">
<h2>{{hero.name}} details!</h2>
<div><label>id: </label>{{hero.id}}</div>
<div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div></div>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

}



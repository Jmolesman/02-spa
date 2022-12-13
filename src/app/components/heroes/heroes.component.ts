import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:IHeroe[] =[]

  constructor(private _heroesService: HeroesService,
              private _router:Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(id:Number){
    this._router.navigate(['/heroe',id]);
  }

}

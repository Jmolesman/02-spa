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

  // Se saca porque se agrego el id al array ahora la redireccion la maneja la tarjeta
  // verHeroe(id: number){
  //   this._router.navigate(['/heroe',id]);
  // }

}

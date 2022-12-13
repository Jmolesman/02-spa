import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, IHeroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
})
export class HeroeSearchComponent implements OnInit {

  heroes:IHeroe[] = [];
  buscando:string = "";

  constructor( private _activatedRoute: ActivatedRoute,
               private _router: Router,
               private _heroeService: HeroesService) { 
                _activatedRoute.params.subscribe( params => {
                   this.heroes = _heroeService.searchHeroes(params['name']);
                   this.buscando = params['name'];
                  })
               }

  ngOnInit(): void {
  }

  verHeroe(name:string){
    let id = this._heroeService.getHeroeID(name);
    this._router.navigate(['/heroe',id]);
  }
}

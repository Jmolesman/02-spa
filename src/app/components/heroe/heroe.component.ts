import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService, IHeroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private _router:Router) {
    this._activatedRoute.params.subscribe( params => {
      this.heroe = _heroesService.getHeroe(params['id']);
    })
   }

  ngOnInit(): void {
  }
  
  regresar(){
    this._router.navigate(['/heroes']);
  }
}

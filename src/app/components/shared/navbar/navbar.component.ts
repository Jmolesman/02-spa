import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscarHeroe( terminoDeBusqueda: string){
    console.log(terminoDeBusqueda);
  }
}

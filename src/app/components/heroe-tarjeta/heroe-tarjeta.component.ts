import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index?:number = -1;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor( private _router:Router) { 
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  // verHeroe(){
  //   //podemos usar un if y preguntar si es -1 pero es la misma mierda tendria que agregar el servicio
  //   //que si agrego el servicio para que pedir los datos desde el padre
  //   // this._router.navigate(['/heroe',this.index]);
  //   this.selectedHeroe.emit(this.index);
  // }
  
  //Se cambia porque se agrego el id a la lista de heroes
  verHeroe(){
    this._router.navigate(['/heroe',this.index]);
    // this.selectedHeroe.emit(this.index);
  }
}

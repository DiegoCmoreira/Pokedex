import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-animacao',
  templateUrl: './poke-animacao.component.html',
  styleUrls: ['./poke-animacao.component.scss']
})
export class PokeAnimacaoComponent implements OnInit{

  public isOpen:boolean = false;
  public toSee:boolean = false;

  constructor(){}

  ngOnInit(): void {
  }

  public abrirPokedex(){
    this.isOpen = !this.isOpen;

    if(this.isOpen){
      this.toSee = !this.toSee;
    }
  }
}

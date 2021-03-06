import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.scss']
  styles: [
    `
      .highlight {
          background-color: yellow;
          font-weight: bold;
      }
    `
  ]

})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com.br';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/';
  
  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular'

  valorInicial = "15"

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado(){
    alert
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor)
  }
}

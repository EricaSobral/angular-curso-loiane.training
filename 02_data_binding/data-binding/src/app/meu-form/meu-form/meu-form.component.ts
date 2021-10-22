import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {

  nome : string = "Ericaaaa"

  pessoa : any = {
    nome: 'Erica',
    idade : 25
  }

  constructor() { }

  ngOnInit(): void {
  }

}

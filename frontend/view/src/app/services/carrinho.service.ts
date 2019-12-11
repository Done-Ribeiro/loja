import { Injectable } from '@angular/core';

import { Produto } from '../../model/produto.module';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  listaItens: Produto[] = [];

  constructor() { }

  getListaItens() {
    return this.listaItens;
  }

  setListaItens(listaItens: Produto[]) {
    this.listaItens = listaItens;
  }

}

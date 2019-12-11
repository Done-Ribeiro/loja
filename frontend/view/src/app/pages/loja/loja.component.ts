import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { GrupoProdutoService } from '../../services/grupoproduto.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../../model/produto.module';
import { GrupoProduto } from '../../../model/grupoproduto.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent implements OnInit {

  carrinho: Produto[] = [];
  produtos: Produto[] = [];
  grupos: GrupoProduto[] = [];
  
  constructor(
    private produtoServ: ProdutoService,
    private grupoServ: GrupoProdutoService,
    private carrinhoServ: CarrinhoService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.produtoServ.consultar().subscribe(p => { this.produtos = p; });
    this.grupoServ.consultar().subscribe(p => { this.grupos = p; });
  }

  adicionarProduto(obj: Produto) {
    this.carrinho = this.carrinhoServ.getListaItens();
    this.carrinho.push(obj);
    this.carrinhoServ.setListaItens(this.carrinho);
    Swal.fire(
      '',
      'Produto adicionado ao carrinho',
      'success'
    );
  }
}

import { Component, OnInit } from '@angular/core';

import { Produto } from '../../../model/produto.module';
import { Pessoa } from '../../../model/pessoa.module';

import { ProdutoService } from '../../services/produto.service';
import { PessoaService } from '../../services/pessoa.service';
import { CarrinhoService } from '../../services/carrinho.service';
import Swal from 'sweetalert2';
import { FormaPagamentoService } from '../../services/formapagamento.service';
import { PedidoService } from '../../services/pedido.service';
import { FormaPagamento } from '../../../model/formapagamento.module';
import { Pedido } from '../../../model/pedido.module';
import { ItensPedido } from '../../../model/itenspedido.module';
import { ItensPedidoService } from '../../services/itenspedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  index = 0;
  listadecompras: Produto[];
  produtos: Produto[];
  pessoas: Pessoa[];
  pagamentos: FormaPagamento[];
  clienteSelecId: 0;
  pagamentoSelecId: 0;
  pedidoId: 0;

  pedido: Pedido = {
    id: 0,
    cliente: new Pessoa(),
    dataEmissao: new Date(),
    dataAutorizacao: new Date(),
    status: '',
    total: 0,
    desconto: 0,
    formaPgto: new FormaPagamento(),
  };

  itens: ItensPedido = {
    id: 0,
    pedido: new Pedido(),
    produto: new Produto(),
    qtde: 0,
    valorUnit: 0,
    subTotal: 0
  };

  constructor(
    private produtoService: ProdutoService,
    private pessoaService: PessoaService,
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService,
    private itensPedidoService: ItensPedidoService,
    private formaPagamentoService: FormaPagamentoService,
    private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.produtoService.consultar().subscribe(p => { this.produtos = p; });
    this.pessoaService.consultar().subscribe(p => { this.pessoas = p; });
    this.formaPagamentoService.consultar().subscribe(p => { this.pagamentos = p; });
    this.listadecompras = this.carrinhoService.getListaItens();
  }

  deletar(obj: any) {
    for (let index = 0; index < this.listadecompras.length; index++) {
      const element = this.listadecompras[index];
      if (obj === element) {
        this.index = index;
      }
    }
    this.listadecompras = this.listadecompras.splice(this.listadecompras.length, this.index - 1);
    this.carrinhoService.setListaItens(this.listadecompras);
    this.listar();
  }

  buttonComprar() {
    this.pedido.formaPgto = new FormaPagamento();
    this.pedido.formaPgto.id = this.pagamentoSelecId;
    this.pedido.cliente = new Pessoa();
    this.pedido.cliente.id = this.clienteSelecId;
    this.pedidoService.adicionar(this.pedido).subscribe(r => {
      this.listadecompras.forEach(element => {
        this.itens.produto.qtdeEstoque = element.qtdeEstoque;
        this.itens.subTotal = element.preco;
        this.itens.valorUnit = element.preco;
        this.itens.pedido.id = r.id;
        this.itens.produto.id = element.id;
        this.itensPedidoService.adicionar(this.itens).subscribe(r => {
          Swal.fire(
            'Agradecemos a preferência!',
            'Sua compra chegará em até 7 dias úteis',
            'success'
          )
        })
      })
      this.deletar(this.listadecompras);
      this.router.navigate(['/pages/home']);
    })
  }

}
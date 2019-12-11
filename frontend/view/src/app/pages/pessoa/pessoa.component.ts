import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../../model/pessoa.module';

import { PessoaService } from '../../services/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss'],
})
export class PessoaComponent implements OnInit {

  lista: Pessoa[] = [];
  obj: Pessoa = {
    nome: '',
    cpf: '',
    rg: '',
    dataNasc: new Date(),
    rua: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: 0,
    email: '',
    senha: '',
    tipo: '',
    fone1: '',
    fone2: '',
  };

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pessoaService.consultar().subscribe(r => {
      this.lista = r;
    });
  }

  salvar() {
    this.pessoaService.adicionar(this.obj).subscribe(r => {
      Swal.fire(
        '',
        'Cliente cadastrado com sucesso',
        'success'
      );
      this.listar();
      this.obj = { nome: '', cpf: '', rg: '', dataNasc: new Date(), rua: '', bairro: '', cidade: '', uf: '', cep: 0, email: '', senha: '', tipo: '', fone1: '', fone2: '' }
    });
  }

  deletar(id: number) {
    this.pessoaService.excluir(id).subscribe(r => {
      Swal.fire(
        '',
        'Cliente deletado com sucesso',
        'error'
      );
      this.listar();
    });
  }

  carregarDados(cliente: Pessoa) {
    this.obj = cliente;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../../../model/formapagamento.module';
import { FormaPagamentoService } from '../../services/formapagamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-formapagamento',
  templateUrl: './formapagamento.component.html',
  styleUrls: ['./formapagamento.component.scss']
})
export class FormapagamentoComponent implements OnInit {

  lista: FormaPagamento[] = [];
  obj: FormaPagamento = {
    descricao: '',
    numMaxParc: 0,
    numPadraoParc: 0,
    intervaloDias: 0,
    percentualAcres: 0
  };

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.formaPagamentoService.consultar().subscribe(r => {
      this.lista = r;
    });
  }

  salvar() {
    this.formaPagamentoService.adicionar(this.obj).subscribe(r => {
      Swal.fire(
        '',
        'Forma de pagamento adicionada com sucesso',
        'success'
      );
      this.listar();
      this.obj = { descricao: '', numMaxParc: 0, numPadraoParc: 0, intervaloDias: 0, percentualAcres: 0 }
    });
  }

  deletar(id: number) {
    this.formaPagamentoService.excluir(id).subscribe(r => {
      Swal.fire(
        '',
        'Forma de pagamento deletada com sucesso',
        'error'
      );
      this.listar();
    });
  }

  carregarDados(pagamento: FormaPagamento) {
    this.obj = pagamento;
  }

}

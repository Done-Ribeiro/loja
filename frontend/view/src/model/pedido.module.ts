import { Pessoa } from './pessoa.module';
import { FormaPagamento } from './formapagamento.module';

export class Pedido {
  id?: number;
  cliente: Pessoa;
  dataEmissao: Date;
  dataAutorizacao: Date;
  status: String;
  total: number;
  desconto: number;
  formaPgto: FormaPagamento;
}
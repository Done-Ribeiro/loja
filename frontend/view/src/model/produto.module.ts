import { GrupoProduto } from './grupoproduto.module';

export class Produto {
  id?: number;
  nome: String;
  preco: number;
  descricao: String;
  qtdeEstoque: number;
  und: String;
  grupo: GrupoProduto;
}
import { Pedido } from './pedido.module';
import { Produto } from './produto.module';

export class ItensPedido {
  id?: number;
  pedido: Pedido;
  produto: Produto;
  qtde: number;
  valorUnit: number;
  subTotal: number;
}
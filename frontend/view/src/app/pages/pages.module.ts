import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SobreComponent } from './sobre/sobre.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { GrupoprodutoComponent } from './grupoproduto/grupoproduto.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ProdutoComponent } from './produto/produto.component';

import { GrupoProdutoService } from '../services/grupoproduto.service';
import { PessoaService } from '../services/pessoa.service';
import { ProdutoService } from '../services/produto.service';
import { FormapagamentoComponent } from './formapagamento/formapagamento.component';
import { FormaPagamentoService } from '../services/formapagamento.service';
import { PedidoService } from '../services/pedido.service';
import { ItensPedidoService } from '../services/itenspedido.service';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoService } from '../services/carrinho.service';
import { LojaComponent } from './loja/loja.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    FormsModule,
    AgmCoreModule.forRoot ({
      apiKey: 'API-KEY'
    })
  ],
  declarations: [
    PagesComponent,
    SobreComponent,
    GrupoprodutoComponent,
    PessoaComponent,
    ProdutoComponent,
    FormapagamentoComponent,
    CarrinhoComponent,
    LoginComponent,
    LojaComponent,
  ],
  providers: [
    ProdutoService,
    GrupoProdutoService,
    PessoaService,
    FormaPagamentoService,
    PedidoService,
    ItensPedidoService,
    CarrinhoService,
  ]
})
export class PagesModule {
}

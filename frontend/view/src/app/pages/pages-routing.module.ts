import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { LoginComponent } from './login/login.component';
import { LojaComponent } from './loja/loja.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { SobreComponent } from './sobre/sobre.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ProdutoComponent } from './produto/produto.component';
import { GrupoprodutoComponent } from './grupoproduto/grupoproduto.component';
import { FormapagamentoComponent } from './formapagamento/formapagamento.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'home',
      component: LojaComponent,
    },
    {
      path: 'carrinho',
      component: CarrinhoComponent,
    },
    {
      path: 'sobre',
      component: SobreComponent,
    },
    {
      path: 'pessoa',
      component: PessoaComponent,
    },
    {
      path: 'produto',
      component: ProdutoComponent,
    },
    {
      path: 'grupoproduto',
      component: GrupoprodutoComponent,
    },
    {
      path: 'formapagamento',
      component: FormapagamentoComponent,
    },
    {
      path: '',
      redirectTo: 'ecommerce',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

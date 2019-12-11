import { NbMenuItem } from '@nebular/theme';

let permissao;
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Nossa loja',
    icon: 'gift-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Localização',
    icon: 'pin-outline',
    link: '/pages/sobre',
  },
  // permissao = {
  //   title: 'AREA RESTRITA',
  //   group: true,
  // },
  // {
  //   title: 'Clientes',
  //   icon: 'people-outline',
  //   link: '/pages/pessoa',
  // },
  // {
  //   title: 'Produtos',
  //   icon: 'smartphone-outline',
  //   link: '/pages/produto',
  // },
  // {
  //   title: 'Grupo de Produtos',
  //   icon: 'shopping-bag-outline',
  //   link: '/pages/grupoproduto',
  // },
  // {
  //   title: 'Formas de Pagamento',
  //   icon: 'credit-card-outline',
  //   link: '/pages/formapagamento',
  // }
];

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../../model/pessoa.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,
    private pessoaService: PessoaService) { }

  pessoa: Pessoa[];
  email = '';
  senha = '';

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pessoaService.consultar().subscribe((r: any) => {
      this.pessoa = r;
    });
  }

  verificarLogin() {
    this.pessoa.forEach(r => {
      if (this.email == r.email && this.senha == r.senha) {
        this.router.navigate(['/pages/home']);
      } else {
        Swal.fire(
          '',
          'Usuario ou senha incorretos',
          'error'
        );
        this.email = '';
        this.senha = '';
      }
    });
  }

}

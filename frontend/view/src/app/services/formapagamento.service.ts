import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  constructor(private http: HttpClient) { }

  adicionar(obj: any): Observable<any> {
    return this.http.post(`${SERVICE}/formapgto/`, obj);
  }

  alterar(id: number, obj: any): Observable<any> {
    return this.http.put(`${SERVICE}/formapgto/${id}`, obj);
  }

  consultar(): Observable<any> {
    return this.http.get(`${SERVICE}/formapgto`);
  }

  excluir(id: Number): Observable<any> {
    return this.http.delete(`${SERVICE}/formapgto/${id}`);
  }

}

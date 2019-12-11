import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class GrupoProdutoService {

  constructor(private http: HttpClient) { }

  adicionar(obj: any): Observable<any> {
    return this.http.post(`${SERVICE}/grupoproduto/`, obj);
  }

  alterar(id: number, obj: any): Observable<any> {
    return this.http.put(`${SERVICE}/grupoproduto/${id}`, obj);
  }

  consultar(): Observable<any> {
    return this.http.get(`${SERVICE}/grupoproduto`);
  }

  excluir(id: Number): Observable<any> {
    return this.http.delete(`${SERVICE}/grupoproduto/${id}`);
  }

}

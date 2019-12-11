import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  adicionar(obj: any): Observable<any> {
    return this.http.post(`${SERVICE}/pedido/`, obj);
  }

  alterar(id: number, obj: any): Observable<any> {
    return this.http.put(`${SERVICE}/pedido/${id}`, obj);
  }

  consultar(): Observable<any> {
    return this.http.get(`${SERVICE}/pedido`);
  }

  excluir(id: Number): Observable<any> {
    return this.http.delete(`${SERVICE}/pedido/${id}`);
  }

}

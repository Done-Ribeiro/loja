import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ItensPedidoService {

  constructor(private http: HttpClient) { }

  adicionar(obj: any): Observable<any> {
    return this.http.post(`${SERVICE}/itenspedido/`, obj);
  }

  alterar(id: number, obj: any): Observable<any> {
    return this.http.put(`${SERVICE}/itenspedido/${id}`, obj);
  }

  consultar(): Observable<any> {
    return this.http.get(`${SERVICE}/itenspedido`);
  }

  excluir(id: Number): Observable<any> {
    return this.http.delete(`${SERVICE}/itenspedido/${id}`);
  }

}

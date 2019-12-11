import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const SERVICE = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  adicionar(obj: any): Observable<any> {
    return this.http.post(`${SERVICE}/pessoa/`, obj);
  }

  alterar(id: number, obj: any): Observable<any> {
    return this.http.put(`${SERVICE}/pessoa/${id}`, obj);
  }

  consultar(): Observable<any> {
    return this.http.get(`${SERVICE}/pessoa`);
  }

  excluir(id: Number): Observable<any> {
    return this.http.delete(`${SERVICE}/pessoa/${id}`);
  }

}

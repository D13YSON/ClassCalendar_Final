import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletarService {

  public host: string = 'http://localhost:8080/api/';
  public host2: string = ''
  public options: any = { headers: new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}

  constructor(private http: HttpClient) { }

  public deleteDados(disciplinaType: any,id: any) {
    this.atualizaHost(disciplinaType, id);
    return new Promise((ret) => {

      // Requisição DELETE
      this.http.delete(this.host, this.options).subscribe(dados => {
        ret(dados);
      });
    });
  }

  public deleteUsuarios(userGroup: any,id: any) {
    this.atualizaHost( userGroup, id );
    return new Promise((ret) => {

      // Requisição DELETE
      this.http.delete(this.host, this.options).subscribe(dados => {
        ret(dados);
      });
    });
  }


  public atualizaHost(userGroup:any ,id:any ) {
    const baseUrl = 'http://localhost:8080/api/';

    switch (userGroup) {
      case 'aluno':
        this.host = baseUrl + 'aluno/' + id;
        break;
      case 'professor':
        this.host = baseUrl + 'professor/' + id;
        break;
      case 'tecnico':
        this.host = baseUrl + 'tecnico/' + id;
        break;
      case 'disciplina':
        this.host = baseUrl + 'disciplina/' + id;
        break;
      case 'horario':
          this.host = baseUrl + 'horario/' + id;
          break;
      default:
        this.host = baseUrl;
        break;
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaDadosService {

  public host: string = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) {  }

  public getAllDados(userType:any){
    return new Promise((ret) => {
      this.atualizaHost(userType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);
      });
    })
  }
  
// Materias
  public getAll(disciplinaType:any){
    return new Promise((ret) => {
      this.atualizaHost(disciplinaType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public getAllHorario(horarioType:any){
    return new Promise((ret) => {
      this.atualizaHost(horarioType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public getAllMonitoria(monitoriaType:any){
    return new Promise((ret) => {
      this.atualizaHost(monitoriaType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public atualizaHost(userType:any){
    const caminhoTipoUsuario = '/' + userType;

    if (!this.host.includes(caminhoTipoUsuario)) {
      const indiceBarra = this.host.lastIndexOf('/');
      const caminhoSemBarra = this.host.slice(0, indiceBarra);
      this.host = caminhoSemBarra + caminhoTipoUsuario;
    }
  }
}
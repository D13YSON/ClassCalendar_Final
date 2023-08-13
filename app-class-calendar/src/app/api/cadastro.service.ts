import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  public optionsHeader: any = {headers : new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}
  public host:string = 'http://localhost:8080/api/';
  public options: any = { headers: new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}

  constructor(private http:HttpClient) { }
   
  public postUsuario(obj: any, userType: any) {

    this.atualizaHost(userType);

    return new Promise ((ret)=> {
      
      this.http.post(this.host,JSON.stringify(obj),this.optionsHeader).subscribe(dados => {
        ret(dados)
      });
    })

  }

  public postMateria(obj: any, disciplinaType:any){
    this.atualizaHost(disciplinaType)
    return new Promise((ret) => {

      this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
        ret(dados)
      });
      })
    }
  public postHorario(obj: any, horarioType:any){
    this.atualizaHost(horarioType)
    return new Promise((ret) => {
  
      this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
         ret(dados)
      });
      })
       }

  
       public postAgendamento(obj: any, monitoriaType:any){
      this.atualizaHost(monitoriaType)
      return new Promise((ret) => {

        this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
          ret(dados)
        });
        })
      }

  public atualizaHost(userGroup:any){
      const caminho = '/' + userGroup 

      if (!this.host.includes(caminho)) {
        const indiceBarra = this.host.lastIndexOf('/');
        const caminhoSemBarra = this.host.slice(0, indiceBarra);
        this.host = caminhoSemBarra + caminho;
      }
    }

}

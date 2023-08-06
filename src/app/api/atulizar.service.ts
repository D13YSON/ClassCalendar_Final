import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtulizarService {

  public host: string = 'http://localhost:8080/api/';
  public options: any = { headers: new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}
  constructor(private http: HttpClient) { }
  
  public putUsuario(obj:any, userType:any){
    this.atualizaHost(userType);
    
    return new Promise((ret)=>{
      this.http.put(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
        ret(dados)
      })
    })
  }


  public atualizaHost(userGroup:any){
    const userTypePath = '/' + userGroup 

  if (!this.host.includes(userTypePath)) {
    const slashIndex = this.host.lastIndexOf('/');
    const pathWithoutSlash = this.host.slice(0, slashIndex);
    this.host = pathWithoutSlash + userTypePath;

  }
}

}
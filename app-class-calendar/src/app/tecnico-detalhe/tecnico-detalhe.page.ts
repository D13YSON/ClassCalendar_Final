import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtulizarService } from '../api/atulizar.service';

@Component({
  selector: 'app-tecnico-detalhe',
  templateUrl: './tecnico-detalhe.page.html',
  styleUrls: ['./tecnico-detalhe.page.scss'],
})
export class TecnicoDetalhePage implements OnInit {

  public tecnico: any

  nomeAtt: any
  cpfAtt: any
  enderecoAtt: any
  telefoneAtt:any
  senhaAtt:any
  status: any
  idTecnico: any
  userGroup: any = 'tecnico'
  public userType: any;
  public usuario: any;

  constructor(private route:ActivatedRoute,private atualizar:AtulizarService) { }

  public atualizaTecnico(){
    let newObj: any = {
    idTecnico:this.idTecnico,
    nome:this.nomeAtt,
    cpf:this.cpfAtt,
    endereco:this.enderecoAtt,
    telefone:this.telefoneAtt,
    senha:this.senhaAtt
    }
    
    this.atualizar.putUsuario(newObj,this.userGroup).then(dados =>{
      console.log('Update');
      console.log(dados);
    })

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tecnico = params['tecnico'];
      this.usuario = params['usuario'];
      this.userType = params['userType'];
      this.idTecnico = this.tecnico.idTecnico;
      this.nomeAtt = this.tecnico.nome;
      this.cpfAtt = this.tecnico.cpf;
      this.telefoneAtt = this.tecnico.telefone;
      this.enderecoAtt = this.tecnico.endereco;
      this.senhaAtt = this.tecnico.senha;
    });
  }

}

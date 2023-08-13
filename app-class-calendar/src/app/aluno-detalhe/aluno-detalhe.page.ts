import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtulizarService } from '../api/atulizar.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.page.html',
  styleUrls: ['./aluno-detalhe.page.scss'],
})
export class AlunoDetalhePage implements OnInit {

  public aluno: any
  idAluno: any
  nomeAtt: any
  cpfAtt: any
  turmaAtt: any
  enderecoAtt: any
  telefoneAtt:any
  senhaAtt:any
  status: any
  userGroup: any = 'aluno'
  public userType: any;
  public usuario: any;


  constructor(private route:ActivatedRoute,private atualizar:AtulizarService) { }
  
  public atualizaAluno(){
    let newObj: any ={
    idAluno:this.idAluno,
    nome:this.nomeAtt,
    cpf:this.cpfAtt,
    turma:this.turmaAtt,
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
      this.aluno = params['aluno'];
      this.usuario = params['usuario'];
      this.userType = params['userType'];
      this.idAluno = this.aluno.idAluno;
      this.nomeAtt = this.aluno.nome;
      this.cpfAtt = this.aluno.cpf;
      this.telefoneAtt = this.aluno.telefone;
      this.enderecoAtt = this.aluno.endereco;
      this.senhaAtt = this.aluno.senha;
      this.turmaAtt = this.aluno.turma;
    });
  }

}

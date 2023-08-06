import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtulizarService } from '../api/atulizar.service';

@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.page.html',
  styleUrls: ['./professor-detalhe.page.scss'],
})
export class ProfessorDetalhePage implements OnInit {
  public professor: any

  nomeAtt: any
  cpfAtt: any
  enderecoAtt: any
  telefoneAtt:any
  senhaAtt:any
  status: any
  idProfessor: any
  userGroup: any = 'professor'
  public userType: any;
  public usuario: any;

  constructor(private route:ActivatedRoute, private atualizar:AtulizarService) { }

  public atualizaProfessor(){
    let newObj: any ={
     idProfessor: this.idProfessor,
     nome: this.nomeAtt,
     cpf: this.cpfAtt,
     telefone: this.telefoneAtt,
     senha: this.senhaAtt,
     endereco: this.enderecoAtt

    }

    this.atualizar.putUsuario(newObj,this.userGroup).then(dados => {
      console.log('Upadate');
      console.log(dados);
    })

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.professor = params['professor'];
      this.usuario = params['usuario'];
      this.userType = params['userType'];
      this.idProfessor = this.professor.idProfessor;
      this.nomeAtt = this.professor.nome;
      this.cpfAtt = this.professor.cpf;
      this.telefoneAtt = this.professor.telefone;
      this.enderecoAtt = this.professor.endereco;
      this.senhaAtt = this.professor.senha;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../api/cadastro.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome : any
  endereco : any
  senha: any
  telefone: any
  turma: any
  cpf: any
  userGroup : any;

  constructor(private servicePostUsuario:CadastroService, private alertController: AlertController ) {

   }

   public  async postAluno() {
    if(!this.nome || !this.endereco || !this.senha || !this.telefone || !this.cpf || !this.turma){
      // Verifica se algum campo está em branco
     await this.exibirAlerta("Preencher todos os campos !")
       return;

    }

    let newObj : any = {

      nome : this.nome,
      endereco : this.endereco,
      senha: this.senha,
      telefone: this.telefone,
      turma: this.turma,
      cpf: this.cpf,
      status: true
    }

    this.servicePostUsuario.postUsuario(newObj,this.userGroup).then ((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.nome = ''
      this.endereco = ''
      this.telefone = ''
      this.turma = ''
      this.senha = ''
    })
   }

   public async postTecnico() {
    if (!this.nome || !this.endereco || !this.senha || !this.telefone || !this.cpf) {
      // Verifica se algum campo está em branco
     await this.exibirAlerta("Preencher todos os campos !")
      return;
    }
  
    let newObj: any = {
      nome: this.nome,
      endereco: this.endereco,
      senha: this.senha,
      telefone: this.telefone,
      cpf: this.cpf,
      status: true
    };
  
    this.servicePostUsuario.postUsuario(newObj, this.userGroup).then((newObj) => {
      console.log(newObj);
      this.cpf = '';
      this.nome = '';
      this.endereco = '';
      this.telefone = '';
      this.senha = '';
    });
  }

   public async postProfessor(){
    
    if(!this.nome || !this.endereco || !this.senha || !this.telefone || !this.cpf){
       // Verifica se algum campo está em branco
     await this.exibirAlerta("Preencher todos os campos !")
      return;
    }

    let newObj : any = {
      nome : this.nome,
      endereco : this.endereco,
      senha: this.senha,
      telefone: this.telefone,
      cpf: this.cpf,
      status : true

    }

    this.servicePostUsuario.postUsuario(newObj,this.userGroup).then ((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.nome = ''
      this.endereco = ''
      this.telefone = ''
      this.senha = ''
    })
   }

   async exibirAlerta (mensagem: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  ngOnInit() {
  }

}

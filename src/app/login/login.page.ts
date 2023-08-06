import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';
import { CadastroService } from '../api/cadastro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private service: BuscaDadosService,private servicePostUsuario:CadastroService, private alertController: AlertController, private navCtrl: NavController) { 
    const padrao = {
      nome: 'ADMIM',
      endereco: 'CLASSCALENDAR',
      senha: '1234',
      telefone: '012345678912',
      cpf: '1234',
      status: true
    };
  }

  userGroup: any = "tecnico ";
  userType : any;
  cpf : any;
  senha : any;
  users : any;
  private admins:any = []; 

  public async getAllDados(){
    try {
      let userTypeString: string;
      if (this.userType === 'aluno' || this.userType === 'tecnico') {
        userTypeString = this.userType + 's';
      } else if (this.userType === 'professor') {
        userTypeString = this.userType + 'es';
      } else {
        console.log('Tipo de usuário inválido.');
        return;
      }
  
      const dados = await this.service.getAllDados(userTypeString);
      this.users = dados;
      console.log(this.users);
    } catch (error) {
      console.log('Erro ao obter os dados:', error);
    }
  }

  public async login(){
    if (!this.userType) {
      await this.exibirAlerta ('Por favor, selecione o tipo do usuario antes de fazer login');
      return;
    }
    await this.getAllDados();
  
    const user = this.users.find((u: any) => u.cpf === this.cpf && u.senha === this.senha);  
    if (user) {
      const { ...userInfo } = user;
      console.log('Informações do usuário:', userInfo);
      await this.exibirAlerta('Login bem-sucedido');
      this.senha = ""
      this.cpf = ""
      this.navCtrl.navigateForward('home', {
        queryParams: { usuario: userInfo,
                      userType: this.userType}
      });
    } else if (this.users.some((u: any) => u.cpf === this.cpf)) {
      await this.exibirAlerta ('Senha errada');
    } else if (this.users.some((u: any) => u.senha === this.senha)) {
      await this.exibirAlerta ('CPF errado');
    } else {
      await this.exibirAlerta ('CPF e senha errados');
    }
  }

  async exibirAlerta (mensagem: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });
  
    await alert.present();
  }


   async ngOnInit() {
     try {
          this.admins = await this.service.getAllDados('tecnicos');
        } catch (error) {
          console.log('Erro ao obter os dados de ADMIMs:', error);
        }
    
        // Verifica a existência de ADMIMs e cria um novo usuário se necessário.
        if (!this.admins || this.admins.length === 0) {
          const padrao = {
            nome: 'ADMIM',
            endereco: 'CLASSCALENDAR',
            senha: '1234',
            telefone: '012345678912',
            cpf: '1234',
            status: true
          };
    
          this.servicePostUsuario.postUsuario(padrao, this.userGroup).then((newObj) => {
            console.log(newObj);
          });
        }
      }
    
  }


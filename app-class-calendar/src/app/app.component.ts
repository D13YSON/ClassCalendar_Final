import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public usuario:any
  public userType:any

  constructor(private alertController: AlertController, private navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  goCadastro(){
    this.navCtrl.navigateForward('cadastro', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType}
    });
  }

  goAlunos(){
    this.navCtrl.navigateForward('aluno', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType}
    });
  }

  goTecnicos(){
    this.navCtrl.navigateForward('tecnico', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType}
    });
  }

  goProfessores() {
    this.navCtrl.navigateForward('professor', {
      queryParams: { button: 'professores',
                    usuario: this.usuario,
                    userType: this.userType }
    })
  }

  goDisciplinas() {
    this.navCtrl.navigateForward('professor', {
      queryParams: { button: 'disciplinas',
                    usuario: this.usuario,
                    userType: this.userType }
    })
  }

  goHorario() {
    this.navCtrl.navigateForward('horario', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType }
    })
  }

  async goExit() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja sair?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Sair',
          handler: () => {
            this.navCtrl.navigateForward('login')
          }
        }
      ]
    });
      await alert.present();
  }

  exibirMenu(): boolean {
    const excludedRoutes = ['login']; // Adicione as rotas que devem excluir o menu
    const excludedUserTypes = ['aluno', 'professor']; // Adicione os tipos de usuário que devem excluir o menu
  
    // Verifique se a rota atual está na lista de rotas excluídas
    const currentRoute = this.router.url.split('/')[1];
    const userType = this.getCurrentUserType(); // Função para obter o userType atual
  
    return !excludedRoutes.includes(currentRoute) && !excludedUserTypes.includes(userType);
  }


  getCurrentUserType(): string {
    return this.userType
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { BuscaDadosService } from '../api/busca-dados.service';
import { AtulizarService } from '../api/atulizar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showAgendamento: boolean = true;
  isMenuOpen: number = 0;

  public usuario : any;
  public userType: any;
  monitoriaType: any = 'monitoria'
  horarioType: any = 'horario'
  itens: any = [];
  items: any = [];
  idMonitoria: any;
  estado: any;
  userInput: any;

  constructor(private navCtrl: NavController, private route : ActivatedRoute, private service : BuscaDadosService, private alertController: AlertController, private modificar: AtulizarService) {}

  public getAlldados(){
    this.service.getAllMonitoria(this.monitoriaType+'s').then(dados=>{
      this.items=dados;
      console.log(dados);
    })

  }

  public getAllhorario (){
    this.service.getAllHorario(this.horarioType+'s').then(dados=>{
      this.itens=dados;
    })
    
  }

  public verificarIdAluno(items: any[], usuario: any):boolean {
    for(let i = 0; i < items.length; i++){
      if (items[i].aluno.IdAluno===usuario.IdAluno){
        return true;
      } 
    }
    return false;
  }

  public todosMonitoriasIndisponiveis(items:any[]):boolean {
    return this.items.every((items:{estado: any;})=>items.estado===false);
  }

  public checkHorarioDisponivel(itens:any[]):boolean{
    return itens.some(horario=>horario.disponivel==false);
  }

  formatarHorario(horarioNumerico: number): string {
    const horarioString = horarioNumerico.toString();
    const hora = horarioString.substring(0, horarioString.length - 2);
    const minutos = horarioString.substring(horarioString.length - 2);
    return hora + ':' + minutos;
  }

  verificarIdProfessor(items: any[], usuario: any): boolean {
    for (let i = 0; i < items.length; i++) {
      if (items[i].horario.disciplina.professor.idProfessor === usuario.idProfessor) {
        return true;
      }
    }
    return false;
  }

  async openPopup(monitoria:any) {
    const alert = await this.alertController.create({
      header: 'Feedback para o aluno: ' + monitoria.aluno.nome,
      inputs: [
        {
          name: 'userInput',
          type: 'text',
          placeholder: 'De seu feedback',
          value: this.userInput
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Enviar',
          handler: (data) => {
            this.userInput = data.userInput;
            this.feedback(monitoria)
          }
        }
      ]
    });

    await alert.present();
  }
  
  public atualizar(monitoria:any) {
    let newObj: any = {
      idMonitoria: monitoria.idMonitoria,
      estado: false,
      feedback: this.userInput,
      aluno:{
        idAluno: monitoria.aluno.idAluno,
      },
      horario:{
        idHorario: monitoria.horario.idHorario,
      }
    };

    this.modificar.putUsuario(newObj, this.monitoriaType).then(async dados => {
      await this.exibirAlerta('Finalização da Monitoria, por favor, atualize a pagina');
    });
  }

  public feedback(monitoria:any) {
    let newObj: any = {
      idMonitoria: monitoria.idMonitoria,
      estado: true,
      feedback: this.userInput,
      aluno:{
        idAluno: monitoria.aluno.idAluno,
      },
      horario:{
        idHorario: monitoria.horario.idHorario,
      }
    };

    this.modificar.putUsuario(newObj, this.monitoriaType).then(async dados => {
      await this.exibirAlerta('Feedback concluido');
    });
  }

  goHome(){
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
  
  async exibirAlerta (mensagem: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
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

  goPerfil(){
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goAgendamento(){
    this.navCtrl.navigateForward('agendamento', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  ngOnInit() {
      this.getAlldados()
      this.getAllhorario()
      this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}


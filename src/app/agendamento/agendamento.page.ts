import { Component, OnInit } from '@angular/core';
import { BuscaDadosService } from '../api/busca-dados.service';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from '../api/cadastro.service';
import { AlertController, NavController } from '@ionic/angular';
import { AtulizarService } from '../api/atulizar.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  public usuario: any
  public userType: any
  public horarioSelecionado: any;
  horario:any
  idHorario:any
  disponivel: any
  disciplina: any
  itens: any = []
  items: any = []
  mes:any
  dia:any
  horarioInicio:any
  horarioFim:any
  horarioType:any = 'horario'
  monitoriaType:any='monitoria'
  
  constructor(private modificarHorario: AtulizarService, private navCtrl: NavController, private alertController: AlertController, private postAgendamento: CadastroService,private service: BuscaDadosService, private route: ActivatedRoute) { }

  public getAllDados(){
    this.service.getAllHorario(this.horarioType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  checkHorarioDisponivel(itens: any[]): boolean {
    return itens.some(horario => horario.disponivel === true);
  }


  public getAll(){
    this.service.getAllMonitoria(this.monitoriaType+'s').then(dados => {
      this.items = dados;
      console.log(this.items)
    })
  }

  todosHorariosIndisponiveis(itens: any []): boolean {
    return this.itens.every((itens: { disponivel: any; }) => itens.disponivel === false);
  }

  formatarHorario(horarioNumerico: number){
    const horarioString = horarioNumerico.toString();
    const hora = horarioString.substring(0, horarioString.length - 2);
    const minutos = horarioString.substring(horarioString.length - 2);
    return hora + ':' + minutos;
  }

  public async salvaAgendamento(horarioSelecionado: any) {
    let obj: any = {
      idHorario: horarioSelecionado.idHorario,
      disponivel: false,
      mes: horarioSelecionado.mes, 
      dia: horarioSelecionado.dia,
      horarioInicio: horarioSelecionado.horarioInicio,
      horarioFim: horarioSelecionado.horarioFim,
      disciplina: {
        idDisciplina: horarioSelecionado.disciplina.idDisciplina
      },
      professor: {
        idProfessor: horarioSelecionado.disciplina.professor.idProfessor
      }
    };
  
    await this.modificarHorario.putUsuario(obj, this.horarioType).then(() => {
    });
  
    let newObj: any = {
      estado: true,
      aluno: {
        idAluno: this.usuario.idAluno
      },
      horario: {
        idHorario: horarioSelecionado.idHorario
      }
    };
  
    this.postAgendamento.postAgendamento(newObj, this.monitoriaType).then(async (newObj) => {
      await this.exibirAlerta('Agendamento marcado, por favor, volta para a home e atualize para visualizar o agendamento');
      console.log(newObj);
    });
  }
  
  
  async exibirAlerta (mensagem: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  goHome(){
    this.navCtrl.navigateForward('home', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goPerfil(){
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
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

  ngOnInit() {
    this.getAllDados()
    this.getAll()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}